import React, { PureComponent } from "react";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import { Card, CardContent, Typography, CardActions, Avatar, CardHeader, Chip, IconButton, withStyles } from "@material-ui/core";
import Article from "../../interfaces/Article";
import moment from "moment";
import Favorite from "@material-ui/icons/Favorite";
import Badge from '@material-ui/core/Badge';

interface ArticleCardProps {
    article: Article
}

const StyledBadge = withStyles(() => ({
    badge: {
      top: '50%',
      right: -3,
      fontSize: "0.8rem"
    },
}))(Badge);

export class ArticleCard extends PureComponent<ArticleCardProps & WithStyles<typeof styles>> {
	render() {
		return (
            <Card className={this.props.classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={this.props.classes.avatar}>
                            { this.props.article.author.username? this.props.article.author.username[0]: "" }
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="Cart" classes={{root: this.props.classes.favBtn}}>
                            <StyledBadge badgeContent={this.props.article.favoritesCount}>
                                <Favorite classes={{root: this.props.classes.favIcon}}/>
                            </StyledBadge>
                        </IconButton>
                    }
                    title={this.props.article.author.username}
                    subheader={moment(this.props.article.createdAt).format("MMMM D, YYYY")}
                    classes={{root: this.props.classes.cardHeader}}
                />
                <CardContent classes={{root: this.props.classes.cardContent}}>
                    <Typography variant="h5" component="h5">
                        { this.props.article.title }
                    </Typography>
                    <Typography className={this.props.classes.description} color="textSecondary" variant="body1">
                        { this.props.article.description }
                    </Typography>
                </CardContent>
                <CardActions  classes={{root: this.props.classes.actions}}>
                    <Typography variant="body2" component="p" color="textSecondary" classes={{root: this.props.classes.readMore}}>
                        Read more...
                        { this.props.article.tagList.map((tag) => <Chip label={tag} clickable/>) }
                    </Typography>
                </CardActions>
            </Card>
		);
	}
}