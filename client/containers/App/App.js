import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';

import HeaderBar from './components/HeaderBar';

import styles from './App.css';

class App extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired
  }


  render() {
    return (
      <div>
        <HeaderBar location={this.props.location} />
        <div className={`${styles.routerContainer} scroll-container`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions
  };
}

export default connect(mapStateToProps, null)(App);
