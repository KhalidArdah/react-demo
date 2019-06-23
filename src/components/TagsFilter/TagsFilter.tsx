import React, { PureComponent } from "react";
import { WithStyles } from "@material-ui/styles";
import styles from "./styles";
import { Box, Chip } from "@material-ui/core";



export class TagsFilter extends PureComponent<WithStyles<typeof styles>> {
	render() {
		return (
            <Box bgcolor="gray">
                { [<Chip label="khalid"/>, <Chip label="khalid1"/>, <Chip label="khalid1"/>, <Chip label="khalid1"/>, <Chip label="khalid1"/>, <Chip label="khalid1"/>, <Chip label="khalid1"/>, <Chip label="khalid1"/>, <Chip label="khalid1"/>, <Chip label="khalid1"/>, <Chip label="khalid1"/>, <Chip label="khalid1"/>, <Chip label="khalid1"/>, <Chip label="khalid1"/>, <Chip label="khalid1"/>, <Chip label="khalid1"/>, <Chip label="khalid1"/>, <Chip label="khalid1"/>, <Chip label="khalid1"/>] }
            </Box>
		);
	}
}