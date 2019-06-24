import React, { PureComponent } from "react";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Box from '@material-ui/core/Box';
import { Container, Tabs, Tab } from "@material-ui/core";
import { MainSectionState, DemoTab } from "./MainSectionState";
import DemoTabContent from "./DemoTabContent";
import TagsFilter from "../TagsFilter";
import { TabContainer } from "./TabContainer";
import Article from "../../interfaces/Article";
import Header from "../Header";
import { RouteComponentProps } from "@reach/router";

const articles: Article[] = [
	{
		author: {
			following: false,
			image: "https://static.productionready.io/images/smiley-cyrus.jpg",
			username: "1234qwer1234"
		},
		body: "sdfasdfasdfasdfasdf↵## Hi↵",
		createdAt: "2019-06-19T05:16:01.795Z",
		description: "rsadfasdfa",
		favorited: false,
		favoritesCount: 3,
		slug: "1234qwerqwe-7sl7z8",
		tagList: ["myaw"],
		title: "1234qwerqwe",
		updatedAt: "2019-06-19T05:16:01.795Z"
	}
];

const generalFeedTab: DemoTab = {
	title: "Global Feed",
	content: <TabContainer><DemoTabContent articles={articles}/></TabContainer>
};

export class MainSection extends PureComponent<RouteComponentProps & WithStyles<typeof styles>, MainSectionState> {
	state: MainSectionState = {
		/* index of active tab */
		tabIndex: 0,
		/* main section tabs */
		tabs: [
			generalFeedTab
		]
	}

	filtrationTags: string[] = [
		"khalid",
		"test"
	];

	filterArticles = (tag: string) => {
		// filter
		const filteredArticles = this.getFilteredArticles(tag);
		const newTab = {
			title: "# " + tag,
			content: <TabContainer><DemoTabContent articles={filteredArticles}/></TabContainer>
		};
		const tabs: DemoTab[] = [
			generalFeedTab,
			newTab
		];
		this.setState({tabs: tabs, tabIndex: 1});
	}

	handleTabChange = (event: React.ChangeEvent<{}>, value: number) => {
		this.setState({ tabIndex: value });
	}

	getFilteredArticles = (tag: string) => {
		return [
			{
				author: {
					following: false,
					image: "https://static.productionready.io/images/smiley-cyrus.jpg",
					username: "filtered"
				},
				body: "sdfasdfasdfasdfasdf↵## Hi↵",
				createdAt: "2019-07-19T05:10:01.795Z",
				description: "myaw",
				favorited: true,
				favoritesCount: 5,
				slug: "1234qwerqwe-7sl7z8",
				tagList: ["none"],
				title: "title",
				updatedAt: "2019-01-19T05:11:01.795Z"
			}
		];
	}

	render() {
		const { classes } = this.props;
		const { tabIndex, tabs } = this.state;
		return (
			<>
				<Header />
				<Container maxWidth="lg">
					<Box display="flex" p={1} className={classes.root}>
						<Box p={1} flexGrow={2} className={classes.postsContainer}>
							<Tabs value={tabIndex} onChange={this.handleTabChange} className={classes.tabs}>
								{tabs.map((tab, index) => <Tab key={index} label={tab.title} className={classes.tabTitle} />)}
							</Tabs>
							{tabs[tabIndex].content}
						</Box>
						<Box p={1} flexGrow={1} className={classes.filtersContainer}>
							<TagsFilter tags={this.filtrationTags} action={this.filterArticles}/>
						</Box>
					</Box>
				</Container>
			</>
		);
	}
}