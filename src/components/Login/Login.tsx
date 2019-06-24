import React, { PureComponent } from "react";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import { RouteComponentProps } from "@reach/router";
import { Container, CssBaseline, Avatar, Typography, TextField, Button, Grid, Link } from "@material-ui/core";

export class Login extends PureComponent<RouteComponentProps & WithStyles<typeof styles>> {
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
				/>
				<Button
				  type="submit"
				  variant="contained"
				  color="secondary"
				  size="large"
				  className={classes.submit}
				>
				  Sign In
				</Button>
			  </form>
			</div>
		  </Container>
		);
	}
}