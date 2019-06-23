import { createStyles, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme) => 
    createStyles({
        tabs: {
            borderBottom: '1px solid #e8e8e8'
        },
        postsContainer: {
            paddingTop: "0",
            paddingBottom: "0"
        },
        filtersContainer: {
            paddingTop: "0",
            paddingBottom: "0",
            maxWidth: "30%"
        },
        tabTitle: {
            textTransform: "none",
            color: theme.palette.secondary.main,
            minWidth: "42px"
        }
    })

export default styles;