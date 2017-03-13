import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateString } from '../reducers/actions.js';

import Demo1 from './Demo1.jsx';
import Demo2 from './Demo2.jsx';

/*global  */

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Demo1 />
        <Demo2 />
      </div>
    );
  }
}
App.propTypes = {
  children: React.PropTypes.node,
  aString: React.PropTypes.string,
  updateString: React.PropTypes.any,
};

const mapStateToProps = (state) => {
  return {
    aString: state.aString
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateString }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);