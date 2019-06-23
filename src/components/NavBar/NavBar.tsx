import React, { PureComponent } from "react";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Container from '@material-ui/core/Container';

export class NavBar extends PureComponent<WithStyles<typeof styles>> {
	render() {
		return (
			<Container maxWidth="lg" className={this.props.classes.navBar}>
				<a className={this.props.classes.brand}>conduit</a>
				<ul className={this.props.classes.navMenu}>
					<li><a href="#">Home</a></li>
					<li><a href="#">Sign in</a></li>
					<li><a href="#">Sign up</a></li>
				</ul>
			</Container>
		);
	}
}