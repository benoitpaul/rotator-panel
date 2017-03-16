import React from 'react';
import RotatorSegment from './RotatorSegment.jsx';


class RotatorPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSpin: 0
        };
    }

    componentDidMount() {
        this.reset();
    }

    reset() {
        console.log(`reset - ${this.props.name}`);
        setTimeout(() => {
            this.scheduleRefresh();
        }, this.props.initialSpinTimeout * 1000);
    }

    scheduleRefresh() {
        console.log(`schedule refresh - ${this.props.name}`);
        setTimeout(() => {
            const endOfCycle = this.isEndOfCycle();
            const newCurrentSpin = endOfCycle ? 0 : this.state.currentSpin + 1;
            if (endOfCycle && typeof (this.props.onCompleteSpinningCycle) != 'undefined') {
                this.props.onCompleteSpinningCycle();
            }
            // else {
                console.log(`spin - ${this.props.name}: ${newCurrentSpin}`);
                this.setState({
                    currentSpin: newCurrentSpin
                });
                this.scheduleRefresh();
            //}
        }, this.props.spinTimeout * 1000);
    }

    isEndOfCycle() {
        const SPIN_CYCLE = 4;
        return this.state.currentSpin === (SPIN_CYCLE - 1);
    }

    render() {
        if (!this.props.children) {
            return <div>Loading...</div>;
        }

        // split children in groups of 4 items
        let groups = this.splitArrayInGroups(this.props.children);

        const segments = groups.map((group, index) => {
            return (<RotatorSegment
                key={index}
                index={index}
                children={group}
                faceWidth={this.props.faceWidth}
                faceHeight={this.props.faceHeight}
                currentSpin={this.state.currentSpin} />);
        });

        const cubeStyle = {
            display: 'flex',
            flexDirection: 'column'
        };

        return (
            <div style={cubeStyle}>
                {segments}
            </div>);
    }

    splitArrayInGroups(children) {
        const GROUP_SIZE = 4;
        let groups = [];
        let i, j;
        for (i = 0, j = children.length; i < j; i += GROUP_SIZE) {
            groups.push(children.slice(i, i + GROUP_SIZE));
        }
        return groups;
    }
}
RotatorPanel.propTypes = {
    name: React.PropTypes.string,
    faceWidth: React.PropTypes.number.isRequired,
    faceHeight: React.PropTypes.number.isRequired,
    initialSpinTimeout: React.PropTypes.number,
    spinTimeout: React.PropTypes.number,
    children: React.PropTypes.array,
    onCompleteSpinningCycle: React.PropTypes.func
}

export default RotatorPanel;