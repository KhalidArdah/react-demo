import React, { PureComponent } from "react";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Container from '@material-ui/core/Container';
import { Link } from "@reach/router";

export class NavBar extends PureComponent<WithStyles<typeof styles>> {
	render() {
		return (
			<Container maxWidth="lg" className={this.props.classes.navBar}>
				<span className={this.props.classes.brand}>conduit</span>
				<ul className={this.props.classes.navMenu}>
					<li><Link to="/home">Home</Link></li>
					<li><Link to="/login">Sign in</Link></li>
				</ul>
			</Container>
		);
	}
}