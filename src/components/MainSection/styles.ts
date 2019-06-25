import { createStyles, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme) => 
    createStyles({
        root: {
            paddingLeft: 0,
            paddingRight: 0
        },
        tabs: {
            
        },
        postsContainer: {
            paddingLeft: 0,
            paddingTop: 0,
            paddingBottom: 0
        },
        filtersContainer: {
            paddingTop: 0,
            paddingBottom: 0,
            maxWidth: "30%",
            minWidth: "30%"
        },
        tabTitle: {
            textTransform: "none",
            color: theme.palette.secondary.main,
            minWidth: "42px"
        }
    })

export default styles;