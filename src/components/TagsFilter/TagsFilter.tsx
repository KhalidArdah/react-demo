import React, { PureComponent } from "react";
import { WithStyles } from "@material-ui/styles";
import styles from "./styles";
import { Box, Chip, Typography } from "@material-ui/core";

interface TagsFilterProps {
	tags: string[],
	action: (tag: string) => void
}

export class TagsFilter extends PureComponent<TagsFilterProps & WithStyles<typeof styles>> {
	handleClick = (event: React.MouseEvent) => {
		this.props.action(event.currentTarget.textContent || "");
	}
	render() {
		const {classes, tags} = this.props;
		return (
            <Box className={classes.root}>
				<Typography component="h1" className={classes.header}>
					Popular Tags
				</Typography>
                { tags.map((tag: string) => <Chip label={tag} key={tag} classes={{root: classes.tag}} onClick={this.handleClick}/>) }
            </Box>
		);
	}
}