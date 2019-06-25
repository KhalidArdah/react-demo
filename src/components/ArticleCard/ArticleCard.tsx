import React, { PureComponent } from "react";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import { Card, CardContent, Typography, CardActions, Avatar, CardHeader, Chip, IconButton, withStyles } from "@material-ui/core";
import { Article } from "../../interfaces/Article";
import moment from "moment";
import Favorite from "@material-ui/icons/Favorite";
import Badge from '@material-ui/core/Badge';
import cn from "classnames";

interface ArticleCardProps {
    article: Article
}

const StyledBadge = withStyles(() => ({
    badge: {
      top: '50%',
      right: -3,
      fontSize: "0.8rem"
    }
}))(Badge);

export class ArticleCard extends PureComponent<ArticleCardProps & WithStyles<typeof styles>> {

    handleBadgeClick = () => {
        console.log("toggleFavorite");
    }

	render() {
        const { classes, article } = this.props;
		return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            {article.author.username? article.author.username[0]: ""}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="Cart" classes={{root: cn(classes.favBtn, {selected: article.favorited})}} onClick={this.handleBadgeClick}>
                            <StyledBadge badgeContent={article.favoritesCount || "0"}>
                                <Favorite classes={{root: classes.favIcon}}/>
                            </StyledBadge>
                        </IconButton>
                    }
                    title={article.author.username}
                    subheader={moment(article.createdAt).format("MMMM D, YYYY")}
                    classes={{root: classes.cardHeader}}
                />
                <CardContent classes={{root: classes.cardContent}}>
                    <Typography variant="h5" component="h5">
                        { article.title }
                    </Typography>
                    <Typography className={classes.description} color="textSecondary" variant="body1">
                        { article.description }
                    </Typography>
                </CardContent>
                <CardActions  classes={{root: classes.actions}}>
                    <Typography variant="body2" component="div" color="textSecondary" classes={{root: classes.readMore}}>
                        <span className={classes.readMoreText}>Read more...</span>
                        <div>
                            { article.tagList.map((tag, index) => <Chip label={tag} clickable key={index} variant="outlined" classes={{root: classes.tag}}/>) }
                        </div>
                    </Typography>
                </CardActions>
            </Card>
		);
	}
}