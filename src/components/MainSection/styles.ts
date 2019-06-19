import { createStyles, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme) => 
    createStyles({
        postsContainer: {
            paddingTop: "0",
            paddingBottom: "0"
        },
        filtersContainer: {
            paddingTop: "0",
            paddingBottom: "0"
        },
        tabTitle: {
            textTransform: "none",
            color: theme.palette.secondary.main,
            minWidth: "42px"
        }
    })

export default styles;