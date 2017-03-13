import React from 'react';
import NumberDisplay from './NumberDisplay.jsx';
import RotatorPanel from './RotatorPanel.jsx'

export default class Demo1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      content: []
    };

    this.onCompleteSpinningCycle = this.onCompleteSpinningCycle.bind(this);
  }

  componentDidMount() {
    this.onCompleteSpinningCycle();
  }

  onCompleteSpinningCycle() {
    const CHUNK_SIZE = 4;
    let newContent = [];
    let current =  this.state.current < 128 ? this.state.current : 0;
    let i, j;
    for (i = current, j = current + CHUNK_SIZE; i < j; i++) {
      newContent.push(i);
    }
    this.setState({
      content: newContent,
      current: (current + CHUNK_SIZE),
    });

  }

  render() {
    const contentNodes = this.state.content.map((c, index) => {
      return (<div key={index}><NumberDisplay n={c} /></div>)
    });
 
    return (
      <div>
        <h1>Demo 1</h1>
        <p>The rotator panel will cycle through the same 4 elements.  
            onCompleteSpinningCycle is not used in this case. </p>
        <RotatorPanel
          faceWidth={150}
          faceHeight={150}
          initialSpinTimeout={0}
          spinTimeout={5}>
          {contentNodes}
        </RotatorPanel>
      </div>
    );
  }
}