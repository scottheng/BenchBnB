import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as APIUtil from './util/session_api_util';
import { logIn, signup, receiveCurrentUser } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    window.login = logIn;
    window.signup = APIUtil.signup;
    window.receiveCurrentUser = receiveCurrentUser;
    const store = configureStore();
    window.store = store;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={ store } />, root);
});