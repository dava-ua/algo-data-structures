import { useContext, useState } from 'react';
import TurnContext from '../TurnContext';
import './styles.css';


export const Cell = ({onCellMark, index}) => {
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
      className='cell'
      style={{ background: state != null ? (state ? 'green' : 'red') : '' }}
      onClick={markCell}> </div>
  );
};
