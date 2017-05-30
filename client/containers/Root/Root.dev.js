import React, { Component } from 'react';

import DevTools from './DevTools';
import RootBase from './Root.prod';

class Root extends Component {
  render() {
    return (
      <RootBase {...this.props}>
      </RootBase>
    );
  }
}

export default Root;
