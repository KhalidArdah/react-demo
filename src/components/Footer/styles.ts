import { createStyles } from "@material-ui/core/styles";

const styles = () => 
    createStyles({
        root: {
            textAlign: "center",
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            padding: 15,
            background: "linear-gradient(#485563, #29323c)",
            boxShadow: "0 5px 5px 5px rgba(0,0,0,0.4)",
            zIndex: 1,

            "& a": {
                color: "#fff",
                fontSize: "1.5rem",
                textDecoration: "none"
            },
            "& a:hover": {
                textDecoration: "underline"
            }
        }
    })

export default styles;