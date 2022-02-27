import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginTop: '70px',
    },
  }),
);
