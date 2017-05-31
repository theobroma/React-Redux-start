import React, { PropTypes, Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from '../../routes';

class Root extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
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
