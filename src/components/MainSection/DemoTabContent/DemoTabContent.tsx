import React, { PureComponent } from "react";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import ArticleCard from "../../ArticleCard";
import Article from "../../../interfaces/Article";

interface DemoTabContentProps {
	articles: Article[]
}
export class DemoTabContent extends PureComponent<DemoTabContentProps, WithStyles<typeof styles>> {

	render() {
		return (
            <div>
				{ this.props.articles.map((article, index) => <ArticleCard article={article} key={index}/>) }
			</div>
		);
	}
}