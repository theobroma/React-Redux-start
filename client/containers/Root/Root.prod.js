import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import PropTypes from 'prop-types';

import routes from '../../routes';

class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  render() {
    const { children, history, store } = this.props;

    return (
      <Provider store={store}>
        <div className="projectname-root-wrapper">
          <Router history={history} routes={routes} />
          {children}
        </div>
      </Provider>
    );
  }
}

export default Root;
