import { createStyles, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme) => 
    createStyles({
        '@global': {
            body: {
              backgroundColor: theme.palette.common.white
            }
        },
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1)
        },
        textField: {
            color: theme.palette.primary.main
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
            float: "right",
            color: "white"
        }
    })

export default styles;