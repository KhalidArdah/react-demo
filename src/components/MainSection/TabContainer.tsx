import React from "react";
import { FunctionComponent } from "react";
import { Typography } from "@material-ui/core";
import PropTypes from 'prop-types';

export const TabContainer: FunctionComponent = (props) => (
	<Typography component="div">
		{props.children}
  	</Typography>
);

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
};
