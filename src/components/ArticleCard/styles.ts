import { createStyles, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme) => 
    createStyles({
        card: {
            padding: "1.5rem 0",
            minWidth: 275,
            borderWidth: "1px 0 0 0",
            borderStyle: "solid",
            boxShadow: "none",
            borderRadius: 0,
            borderColor: "#e8e8e8"
        },
        cardHeader: {
            padding: 0,
            margin: "0 0 1rem 0",
            width: "99%"
        },
        cardContent: {
            padding: 0
        },
        avatar: {
            backgroundColor: "red",
        },
        description: {
            marginBottom: 12
        },
        actions: {
            padding: 0
        },
        readMore: {
            cursor: "pointer",
            width: "100%",
            "& > div": {
                float: "right"
            }
        },
        readMoreText: {
            lineHeight: 2
        },
        favBtn: {
            padding: "5px 9px 5px 0px",
            width: "47px",
            borderRadius: "5px",
            border: "1px solid #398439",
            color: "#5CB85C",
            
            "&:hover, &.selected": {
                color: "#fff",
                backgroundColor: "#398439",
                borderColor: "#2d672d"
            }
        },
        favIcon: {
            marginRight: "7px",
            fontSize: "1rem"
        },
        tag: {
            color: theme.palette.text.secondary,
            margin: 1
        }
    })

export default styles;