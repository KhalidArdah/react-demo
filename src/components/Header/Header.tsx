import React, { PureComponent } from "react";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";

export class Header extends PureComponent<WithStyles<typeof styles>> {
	render() {
		return (
			<div className={this.props.classes.header}>
                <div className={this.props.classes.headerLogo}>conduit</div>
                <p>A place to share your knowledge.</p>
			</div>
		);
	}
}