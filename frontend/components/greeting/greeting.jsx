import React from 'react';
import { Link } from 'react-router';

const Greeting = ({currentUser, logout }) => {
	if (currentUser) {
		return (
			<div>
				<h1>
					Welcome, {currentUser.username}!
				</h1>
				<button onClick={logout}>
					Logout
				</button>
			</div>
		);
	}
	else {
		return (
			<div>
				<Link to="/login">Login</Link>
				<Link to="/signup">Sign up</Link>
			</div>
		);
	}
};

export default Greeting;