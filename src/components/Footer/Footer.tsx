import React, { PureComponent } from "react";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export class Footer extends PureComponent<WithStyles<typeof styles>> {
	render() {
		return (
			<div className={this.props.classes.root}>
				<a href="https://github.com/KhalidArdah/react" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faGithub} />
					&nbsp;
					Fork on GitHub
				</a>
			</div>
		);
	}
}