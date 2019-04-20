import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../actions";
import "../../App.css";

class Login extends Component {
	constructor() {
		super()
		this.state = {
			email: "",
			password: ""
		};

	}

	formChange = event => {
		switch (event.target.name) {
			case "email":
				this.setState({ email: event.target.value });
				break;
			case "password":
				this.setState({ password: event.target.value });
				break;
		    case 'default':
		        return;
		}
	};

	loginUser = userData => {
		this.props.dispatch(actions.login(this.state));
 console.log(this.state);		
	};

	render() {
		const { isAuth, errors } = this.props.auth;


		
		if (isAuth) {
			return <Redirect to={{ pathname: "/" }} />;
		}
	

		return (
			<div className=" f2 pa2 pb4	 sans-serif">
				<h3 className="f2-ns f4 mid-gray fw4 ">Get Started For Free</h3>
				
				<label className="f4 fw1 mid-gray">Email</label>
				<input
					className="input-area w-100 ba b--light-silver pa2 f5  "
					type="email"
					name="email"
					onChange={this.formChange}
				/>
				<label className="f4 fw1 mid-gray">Password</label>
				<input
					className="input-area w-100 pa2 f5 ba b--light-silver "
					type="password"
					name="password"
					onChange={this.formChange}
				/>

				<button
					className="btn-pro w-100 pa2 mt4 f4 fw1 bn near-white"
					onClick={this.loginUser}
				>
					Log In
				</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.authReducer
	};
}

export default connect(mapStateToProps)(Login);