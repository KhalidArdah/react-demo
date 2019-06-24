import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
    palette: {
        primary: {
            main: "#3aabff"
        },
        secondary: {
            main: "#5CB85C"
        },
        text: {
            secondary: "#aaa"
        }
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ].join(','),
        fontWeightMedium: 500,
        body1: {
          fontWeight: 500
        },
        subtitle1: {
          fontSize: 12
        },
        h5: {
            fontSize: "1rem"
        },
        h1: {
            fontSize: "2.5rem",
            fontFamily: "inherit",
            fontWeight: 500,
            lineHeight: 1.1
        }
      }
});