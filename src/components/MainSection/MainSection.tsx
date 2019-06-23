import React, { PureComponent, FunctionComponent } from "react";
import PropTypes from 'prop-types';
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Box from '@material-ui/core/Box';
import { Container, Tabs, Tab, Typography } from "@material-ui/core";
import MainSectionState from "./MainSectionState";
import TagsFilter from "../TagsFilter";

const TabContainer: FunctionComponent = (props) => (
	<Typography component="div" style={{ padding: "1.5rem 0" }}>
		{props.children}
  	</Typography>
);

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

export class MainSection extends PureComponent<WithStyles<typeof styles>, MainSectionState> {
	state = {
		/* index of active tab */
		tabIndex: 0
	}
	tabs = [
		{
			title: "Global Feed",
			content: <TabContainer>GlobalFeedTab</TabContainer>
		}
	];
	getTabContent = (tabIndex: number = 0) => {
		return this.tabs[tabIndex];
	}
	handleTabChange = (event: React.ChangeEvent<{}>, value: number) => {
		this.setState({ tabIndex: value });
	}
	render() {
		return (
			<Container maxWidth="lg">
				<Box display="flex" p={1}>
					<Box p={1} flexGrow={2} className={this.props.classes.postsContainer}>
						<Tabs value={this.state.tabIndex} onChange={this.handleTabChange}>
							{this.tabs.map((tab, index) => <Tab key={index} label={tab.title} className={this.props.classes.tabTitle} />)}
						</Tabs>
						{this.tabs[this.state.tabIndex].content}
					</Box>
					<Box p={1} flexGrow={1} className={this.props.classes.filtersContainer}>
						<TagsFilter />
					</Box>
				</Box>
			</Container>
		);
	}
}