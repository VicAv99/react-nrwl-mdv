import { blueGrey, orange, red, grey } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[500],
    },
    secondary: {
      main: orange[400],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: grey[100],
    },
  },
});
