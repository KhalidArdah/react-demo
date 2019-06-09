import React, { PureComponent } from "react";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import cn from "classnames";

export class NavBar extends PureComponent<WithStyles<typeof styles>> {
	render() {
		return (
			<div className={cn(this.props.classes.navBar, "container")}>
				<a>conduit</a>
				<ul className={this.props.classes.navMenu}>
					<li>Home</li>
					<li>Sign in</li>
					<li>Sign up</li>
				</ul>
			</div>
		);
	}
}