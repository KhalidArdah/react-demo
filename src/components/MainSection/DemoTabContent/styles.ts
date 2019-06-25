import { createStyles, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme) => 
    createStyles({
        pageIndex: {
            display: "inline-block",
            minWidth: "27px",
            height: "27px",
            textAlign: "center",
            borderWidth: "1px",
            borderColor: "green",
            margin: "0px",
            color: "green",
            borderStyle: "solid",
            cursor: "pointer",
            "&.selected": {
                backgroundColor: theme.palette.secondary.main,
                color: "#fff"
            }
        },
        pagination: {
            marginBottom: "84px"
        }
    })

export default styles;