import { createStyles, makeStyles } from '@material-ui/core/styles';

const NODE_SIZE = '100px';

export default makeStyles((theme) =>
  createStyles({
    node: {
      width: NODE_SIZE,
      height: NODE_SIZE,
      lineHeight: NODE_SIZE,
      border: '2px solid',
      float: 'left',
      borderRadius: '500px',
      textAlign: 'center',
      fontSize: '36px',

      '&:hover': {
        cursor: 'pointer',
        borderColor: 'red',
      }
    },
  }),
);
