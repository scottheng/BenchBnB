import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {username: "", password: ""};
		this.updateUsername = this.updateUsername.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
	}


	updateUsername(e) {
		e.preventDefault();
		this.setState({username: e.target.value});
	}

	updatePassword(e) {
		e.preventDefault();
		this.setState({password: e.target.value});
	}	

	handleSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state);
		this.props.processForm(user).then(() => this.redirect("/"));
	}

	render() {
		return (
			<div>
				<h2>{this.props.formType}</h2>
				<form>
					<label> Username:
						<input type="text" onChange={this.updateUsername}/>
					</label>
					<label> Password:
						<input type="password" onChange={this.updatePassword}/>
					</label>
					<input type="submit"/>
				</form>
			</div>
		);
	}
}

export default SessionForm;