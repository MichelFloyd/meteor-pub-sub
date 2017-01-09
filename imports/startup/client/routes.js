/* eslint-disable max-len */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App';
import Documents from '../../ui/pages/Documents';
import DocumentsComposite from '../../ui/pages/Documents-composite';
import NewDocument from '../../ui/pages/NewDocument';
import EditDocument from '../../ui/containers/EditDocument';
import ViewDocument from '../../ui/containers/ViewDocument';
import Index from '../../ui/pages/Index';
import Login from '../../ui/pages/Login';
import NotFound from '../../ui/pages/NotFound';
import RecoverPassword from '../../ui/pages/RecoverPassword';
import ResetPassword from '../../ui/pages/ResetPassword';
import Signup from '../../ui/pages/Signup';

const authenticate = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } onEnter={ authenticate } />
        <Route name="documents" path="/documents" component={ Documents } onEnter={ authenticate } />
        <Route name="documents-composite" path="/documents-composite" component={ DocumentsComposite } onEnter={ authenticate } />
        <Route name="newDocument" path="/documents/new" component={ NewDocument } onEnter={ authenticate } />
        <Route name="editDocument" path="/documents/:_id/edit" component={ EditDocument } onEnter={ authenticate } />
        <Route name="viewDocument" path="/documents/:_id" component={ ViewDocument } onEnter={ authenticate } />
        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
