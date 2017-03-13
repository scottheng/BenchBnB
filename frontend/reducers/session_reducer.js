import { RECEIVE_CURRENT_USER, 
	RECEIVE_ERRORS } from "../actions/session_actions";
import merge from 'lodash/merge';

const _default = Object.freeze({
	currentUser: null,
	errors: []
});

const SessionReducer = (state = _default, action) => {
	Object.freeze(state);
	switch(action.type) {
		case RECEIVE_CURRENT_USER:
			let newState = merge({}, state);
			newState.currentUser = action.user;
			newState.errors = [];
			return newState;
		case RECEIVE_ERRORS:
			newState = merge({}, state);
			newState.currentUser = null;
			newState.errors = action.errors;
			return newState;
		default:
			return state;
	}
};

export default SessionReducer;
