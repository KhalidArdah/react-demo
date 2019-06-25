import React, { PureComponent } from "react";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import { RouteComponentProps } from "@reach/router";
import { Container, Typography, TextField, Button } from "@material-ui/core";

interface LoginState {
	user: User
}

interface User {
	email: string,
	password: string
}

export class Login extends PureComponent<RouteComponentProps & WithStyles<typeof styles>, LoginState > {
	state = {
		user: {
			email: "",
			password: ""
		}
	}

	handleSubmit = () => {
	}

	handleTextFieldChange = (event: any) => {
		event.persist();
		this.setState((state, props) => {
			const user: any = state.user;
			(user[event.target.name] = event.target.value);
			return { user };
		});
	}

	render() {
		const { classes } = this.props;
		return (
			<Container component="main" maxWidth="sm">
			<div className={classes.paper}>
			  <Typography component="h1" variant="h1">
				Sign in
			  </Typography>
			  <Typography component="a" variant="h5" color="secondary">
			  	Need an account?
			  </Typography>
			  <form className={classes.form}>
				<TextField
				  variant="outlined"
				  margin="normal"
				  required
				  fullWidth
				  id="email"
				  placeholder="Email"
				  name="email"
				  autoComplete="email"
				  className={classes.textField}
				  autoFocus
				  onInput={this.handleTextFieldChange}
				/>
				<TextField
				  variant="outlined"
				  margin="normal"
				  required
				  fullWidth
				  name="password"
				  placeholder="Password"
				  type="password"
				  id="password"
				  autoComplete="current-password"
				  className={classes.textField}
				  onInput={this.handleTextFieldChange}
				/>
				<Button
				  type="submit"
				  variant="contained"
				  color="secondary"
				  size="large"
				  className={classes.submit}
				  onClick={this.handleSubmit}
				>
				  Sign In
				</Button>
			  </form>
			</div>
		  </Container>
		);
	}
}