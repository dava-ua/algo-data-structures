import { useContext, useState } from 'react';
import TurnContext from './TurnContext';
import styles from './styles';


export const Cell = ({onCellMark, index}) => {
  const classes = styles();
  const {turn, setTurn} = useContext(TurnContext);
  const [state, setState] = useState(null);

  const markCell = () => {
    if(state) return;
    onCellMark(index, turn)
    setState(turn)
    setTurn(!turn)
  }

  return (
    <div
      className={classes.cell}
      style={{ background: state != null ? (state ? 'green' : 'red') : '' }}
      onClick={markCell}> </div>
  );
};
