import React, { PureComponent } from "react";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import ArticleCard from "../../ArticleCard";
import Article from "../../../interfaces/Article";

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
export class GlobalFeedTab extends PureComponent<WithStyles<typeof styles>> {

	articles: Article[] = articles || [];

	render() {
		return (
            <div>
				{ this.articles.map((article) => <ArticleCard article={article}/>) }
			</div>
		);
	}
}