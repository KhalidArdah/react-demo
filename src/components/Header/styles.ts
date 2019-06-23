import { createStyles } from "@material-ui/core/styles";

const styles = () => 
    createStyles({
        header: {
            padding: "2rem",
            textAlign: "center",
            background: "#5CB85C",
            boxShadow: "inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3)",
            color: "#fff",
            "& p": {
                color: "#fff",
                textAlign: "center",
                fontSize: "1.5rem",
                fontWeight: 300,
                margin: 0
            }
        },
        headerLogo: {
            textShadow: "0px 1px 3px rgba(0, 0, 0, 0.3)",
            fontWeight: 700,
            textAlign: "center",
            fontSize: "3.5rem",
            paddingBottom: "0.5rem",
            fontFamily: "'Titillium Web', sans-serif",
            lineHeight: 1.1
        }
    })

export default styles;