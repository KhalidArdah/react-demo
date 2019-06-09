import React, { PureComponent } from "react";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";

export class Footer extends PureComponent<WithStyles<typeof styles>> {
	render() {
		return (
			<div className={this.props.classes.root}>
                Footer
			</div>
		);
	}
}