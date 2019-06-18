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
                float: "left",
                "& a": {
                    display: "block",
                    paddingTop: ".425rem",
                    paddingBottom: ".425rem",
                    margin: "0 5px",
                    textDecoration: "none",
                    color: "rgba(0, 0, 0, 0.3)",

                    "&.active": {
                        color: "rgba(0, 0, 0, 0.8)"
                    }
                }
            }
        },
        brand: {
            fontFamily: '"Titillium Web", sans-serif',
            cursor: "pointer",
            fontSize: "1.5rem",
            paddingTop: "0rem",
            marginRight: "2rem",
            color: "#5CB85C",
            fontWeight: "bold"
        }
    })

export default styles;