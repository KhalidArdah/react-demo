import React, { PureComponent } from "react";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import ArticleCard from "../../ArticleCard";
import { Article, Articles } from "../../../interfaces/Article";
import cn from "classnames";

interface DemoTabContentProps {
	/* tag of the tab */
	tag: string
}

interface DemoTabContentState {
	/* list of articles and there count */
	articles: Articles,
	pageIndex: number,
	loadingArticles: boolean
}


export class DemoTabContent extends PureComponent<DemoTabContentProps & WithStyles<typeof styles>, DemoTabContentState> {
	state: DemoTabContentState = {
		articles: { articles: [], articlesCount: 0 },
		pageIndex: 0,
		loadingArticles: true
	}

	componentDidMount() {
		this.getArticles(this.props.tag)
		.then((articles) => {
			this.setState({ articles, loadingArticles: false });
		})	
	}

	componentDidUpdate(prevProps: DemoTabContentProps) {
		if(prevProps.tag !== this.props.tag) {
			this.setState({ loadingArticles: true });
			
			this.getArticles(this.props.tag)
			.then((articles) => {
				this.setState({ articles, loadingArticles: false });
			});
		}
		
	}

	getArticles = (tag: string, offset: number = 0) => {
		this.setState({ pageIndex: offset/10 });
		let url = "https://conduit.productionready.io/api/articles?limit=10&offset=" + offset;
		if(tag) {
			url = url + "&tag=" + tag;
		}
		return fetch(url)
		.then(response => response.json());
	}

	handlePageChange = (page: number) => {
		this.setState({ loadingArticles: true });
		this.getArticles(this.props.tag, page*10)
		.then((articles) => {
			this.setState({ articles, loadingArticles: false });
		})	
	}

	render() {
		const { classes } = this.props, { articlesCount, articles } = this.state.articles, { pageIndex, loadingArticles } = this.state;
		const count = Math.ceil(articlesCount/10);
		const pages = Array(count).fill("").map((el, index) => 
			<div className={cn(classes.pageIndex, { selected: pageIndex===index })} key={index} onClick={()=>this.handlePageChange(index)}>{ index + 1 }</div>
		);
		const loading = loadingArticles? <div>loading articles...</div> : null;
		return (
			<>
				<div>
					{ articles.map((article: Article, index: number) => <ArticleCard article={article} key={index}/>) }
				</div>
				{ loading }
				<div className={classes.pagination}>{pages}</div>
			</>
		);
	}
}