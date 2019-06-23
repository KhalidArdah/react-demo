import { createStyles } from "@material-ui/core/styles";

const styles = () => 
    createStyles({
        root: {
            padding: "5px 10px 10px 10px",
            background: "#f3f3f3",
            borderRadius: "4px"
        },
        header: {
            marginBottom: "5px"
        },
        tag: {
            backgroundColor: "#818a91",
            color: "white",
            margin: "2px"
        }
    })

export default styles;