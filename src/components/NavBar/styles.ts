import { createStyles } from "@material-ui/core/styles";

const styles = () => 
    createStyles({
        navBar: {
            padding: 5
        },
        navMenu: {
            display: "inline-block",
            listStyle: "none",
            margin: 0,
            padding: 0,
            float: "right",

            "& li": {
                float: "left"
            }
        }
    })

export default styles;