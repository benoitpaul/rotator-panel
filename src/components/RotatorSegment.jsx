import React from 'react';
import RotatorFace from './RotatorFace.jsx';

class RotatorSegment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            angle: 0
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.currentSpin != nextProps.currentSpin) {
            setTimeout(() => {
                const newAngle = this.state.angle - 90;
                this.setState({
                    angle: newAngle
                });
            }, (this.props.index * 200));
        }
    }

    render() {
        const sides = this.props.children.map((child, index) => {
            const childArray = [child];
            return <RotatorFace
                key={index}
                index={index}
                children={childArray}
                faceWidth={this.props.faceWidth} />;
        });

        const segmentPosition = {
            transformStyle: `preserve-3d`,
            transition: `transform 0.7s`,
            width: this.props.faceWidth,
            height: this.props.faceHeight,
            position: `relative`,
            margin: `auto`,
            transform: `rotateY(${this.state.angle}deg)`
        };

        return (
            <div style={segmentPosition}>
                {sides}
            </div>);
    }
}
RotatorSegment.propTypes = {
    faceWidth: React.PropTypes.number.isRequired,
    faceHeight: React.PropTypes.number.isRequired,
    index: React.PropTypes.number.isRequired,
    currentSpin: React.PropTypes.number.isRequired,
    children: React.PropTypes.array
}

export default RotatorSegment;