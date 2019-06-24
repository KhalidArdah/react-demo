import React, { PureComponent } from "react";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Container from '@material-ui/core/Container';
import { Link } from "@reach/router";

export class NavBar extends PureComponent<WithStyles<typeof styles>> {
	render() {
		return (
			<Container maxWidth="lg" className={this.props.classes.navBar}>
				<a className={this.props.classes.brand}>conduit</a>
				<ul className={this.props.classes.navMenu}>
					<li><a href="#"><Link to="/home">Home</Link></a></li>
					<li><a href="#"><Link to="/login">Sign in</Link></a></li>
				</ul>
			</Container>
		);
	}
}