import { Footer } from "./Footer";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

const stylesHoc = withStyles(styles);

export default stylesHoc(Footer);