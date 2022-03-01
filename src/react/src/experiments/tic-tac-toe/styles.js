import { createStyles, makeStyles } from '@material-ui/core/styles';

const CELL_SIZE = 200;

export default makeStyles((theme) =>
  createStyles({
    cell: {
      width: CELL_SIZE,
      height: CELL_SIZE,
      border: '1px solid',
      float: 'left'
    },
  }),
);
