import React, { PureComponent } from "react";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";

export class MainSection extends PureComponent<WithStyles<typeof styles>> {
	render() {
		return (
			<div className="container">
                Main Section
			</div>
		);
	}
}