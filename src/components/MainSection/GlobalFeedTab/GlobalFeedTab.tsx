import React, { PureComponent } from "react";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";

export class GlobalFeedTab extends PureComponent<WithStyles<typeof styles>> {
	render() {
		return (
            <div>global feed</div>
		);
	}
}