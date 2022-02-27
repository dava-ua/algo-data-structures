import { createTheme } from '@material-ui/core/styles';

// https://material-ui.com/customization/default-theme/?expand-path=$.typography
// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=6D7579&secondary.color=CC0033
// https://in-your-saas.github.io/material-ui-theme-editor/
export const theme = createTheme({
  palette: {
    text: {
      primary: '#000000',
    },
    primary: {
      light: '#B0B6B8',
      main: '#2451B2',
      dark: '#434C53',
      contrastText: '#fff',
    },
    secondary: {
      light: '#999',
      main: '#fff',
      dark: '#666',
      contrastText: '#fff',
    },
    error: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#fff',
    },
  },
});
export default theme;
