import { createStyles, makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles((theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    logo: {
      display: 'flex',
      justifyContent: 'flex-end',
      flex: 1,
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
  }),
);
