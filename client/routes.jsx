import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Layout from './Layout';
import App from './containers/App';
import MediumPopover from './MediumPopover';
import NotFound from './NotFound';

const routes = (
  <div>
    <Route path="/" component={App}>
      <IndexRedirect to="/medium" />
      <Route path="/medium" component={MediumPopover} />
    </Route>
    {/* для всех остальных роутов: показывай NotFound */}
    <Route path="*" component={NotFound} />
  </div>
);

export default routes;
