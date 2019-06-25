import React, { PureComponent } from "react";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Box from '@material-ui/core/Box';
import { Container, Tabs, Tab } from "@material-ui/core";
import { MainSectionState, DemoTab } from "./MainSectionState";
import DemoTabContent from "./DemoTabContent";
import TagsFilter from "../TagsFilter";
import { TabContainer } from "./TabContainer";
import Header from "../Header";
import { RouteComponentProps } from "@reach/router";
import "node-fetch";

export class MainSection extends PureComponent<RouteComponentProps & WithStyles<typeof styles>, MainSectionState> {
	constructor(props: RouteComponentProps & WithStyles<typeof styles>) {
		super(props);

		this.generalFeedTab = this.getTab();

		this.state = {
			/* index of active tab */
			tabIndex: 0,
			/* main section tabs */
			tabs: [this.generalFeedTab],
			/* globalFeed articles */
			allArticles: { articles: [], articlesCount: 0 },
			/* filtered articles */
			filteredArticles: { articles: [], articlesCount: 0 },
			/* tags to filter */
			filtrationTags: []
		}
	}
	generalFeedTab: {
		title: string,
		content: TabContainer
	};

	getTab = (tag: string = "") => {
		let title = "Global Feed";
		if(tag) {
			title = "# " + tag;
		}
		return {
			title,
			content: <TabContainer><DemoTabContent tag={tag}/></TabContainer>
		}
	}

	componentDidMount() {
		// get filtration tags
		this.getFiltrationTags().then((filtrationTags) => {
			this.setState({ filtrationTags: filtrationTags.tags });
		});
	}

	getFiltrationTags() {
		return fetch("https://conduit.productionready.io/api/tags").then(response => response.json());
	}

	filterArticles = (tag: string = "") => {
		// filter
		const tabs: DemoTab[] = [
			this.generalFeedTab,
			this.getTab(tag)
		];
		this.setState({tabs, tabIndex: tabs.length-1});
	}

	handleTabChange = (event: React.ChangeEvent<{}>, value: number) => {
		this.setState({ tabIndex: value });
	}



	render() {
		const { classes } = this.props;
		const { tabIndex, tabs, filtrationTags } = this.state;
		return (
			<>
				<Header />
				<Container maxWidth="lg">
					<Box display="flex" p={1} className={classes.root}>
						<Box p={1} flexGrow={2} className={classes.postsContainer}>
							<Tabs value={tabIndex} onChange={this.handleTabChange} className={classes.tabs}>
								{tabs.map((tab, index) => <Tab key={index} label={tab.title} className={classes.tabTitle} />)}
							</Tabs>
							{tabs.length?tabs[tabIndex].content: []}
						</Box>
						<Box p={1} flexGrow={1} className={classes.filtersContainer}>
							<TagsFilter tags={filtrationTags} action={this.filterArticles}/>
						</Box>
					</Box>
				</Container>
			</>
		);
	}
}