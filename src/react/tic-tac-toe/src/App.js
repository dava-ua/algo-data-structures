import './App.css';
import { Cell } from './components/Cell';
import { useState } from 'react';
import TurnContext from './TurnContext';

function App() {

  const [matrix, setMatrix] = useState([]);
  const [status, setStatus] = useState('make turn');
  const [turn, setTurn] = useState(true);
  const [reset, doReset] = useState(true);
  const value = {
    turn,
    setTurn
  };

  const resetBoard = () => {
    setMatrix([]);
    doReset(false);
    setTimeout(()=>doReset(true), 0)
  };

  function calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (matrix[a] === matrix[b] && matrix[a] === matrix[c] && typeof matrix[a] === 'number' && typeof matrix[b] === 'number' && typeof matrix[c] === 'number') {
        setStatus('win');
      }
    }
    // return null;
  }

  const onCellMarkedCallback = (index, mark) => {
    matrix[index] = mark ? 1 : 0;
    setMatrix(matrix);
    console.log(matrix);
    calculateWinner();
  };

  return (
    <TurnContext.Provider value={value}>
      <button onClick={() => resetBoard()}>
        Reset Board
      </button>
      <h2>{status}</h2>
      {reset && <div className="board">
        <Cell onCellMark={onCellMarkedCallback} index={0}></Cell>
        <Cell onCellMark={onCellMarkedCallback} index={1}></Cell>
        <Cell onCellMark={onCellMarkedCallback} index={2}></Cell>
        <br/>
        <Cell onCellMark={onCellMarkedCallback} index={3}></Cell>
        <Cell onCellMark={onCellMarkedCallback} index={4}></Cell>
        <Cell onCellMark={onCellMarkedCallback} index={5}></Cell>
        <br/>
        <Cell onCellMark={onCellMarkedCallback} index={6}></Cell>
        <Cell onCellMark={onCellMarkedCallback} index={7}></Cell>
        <Cell onCellMark={onCellMarkedCallback} index={8}></Cell>
      </div>
      }
    </TurnContext.Provider>
  );
}

export default App;
