import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
	let loggedIn = false;
	if (state.currentUser) {
		loggedIn = true;
	}
	return {
		loggedIn,
		errors: state.errors,
		formType: ownProps.location.pathname
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	let processForm = ownProps.location.pathname === 'login' ? login : signup;
	return {
		processForm: (user) => dispatch(processForm(user))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SessionForm);