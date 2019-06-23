import React, { PureComponent, FunctionComponent } from "react";
import PropTypes from 'prop-types';
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Box from '@material-ui/core/Box';
import { Container, Tabs, Tab, Typography } from "@material-ui/core";
import MainSectionState from "./MainSectionState";
import GlobalFeedTab from "./GlobalFeedTab";
import TagsFilter from "../TagsFilter";

const TabContainer: FunctionComponent = (props) => (
	<Typography component="div">
		{props.children}
  	</Typography>
);

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

export class MainSection extends PureComponent<WithStyles<typeof styles>, MainSectionState> {
	state: MainSectionState = {
		/* index of active tab */
		tabIndex: 0
	}
	tabs = [
		{
			title: "Global Feed",
			content: <TabContainer><GlobalFeedTab /></TabContainer>
		}
	];

	filterTags: string[] = [
		"khalid",
		"test"
	];

	filterArticles = (tag: string) => {
		// filter
	}

	getTabContent = (tabIndex: number = 0) => {
		return this.tabs[tabIndex];
	}
	handleTabChange = (event: React.ChangeEvent<{}>, value: number) => {
		this.setState({ tabIndex: value });
	}
	render() {
		const { classes } = this.props;
		const { tabIndex } = this.state;
		return (
			<Container maxWidth="lg">
				<Box display="flex" p={1} className={classes.root}>
					<Box p={1} flexGrow={2} className={classes.postsContainer}>
						<Tabs value={tabIndex} onChange={this.handleTabChange} className={classes.tabs}>
							{this.tabs.map((tab, index) => <Tab key={index} label={tab.title} className={classes.tabTitle} />)}
						</Tabs>
						{this.tabs[tabIndex].content}
					</Box>
					<Box p={1} flexGrow={1} className={classes.filtersContainer}>
						<TagsFilter tags={this.filterTags} action={this.filterArticles}/>
					</Box>
				</Box>
			</Container>
		);
	}
}