import {
  Box, Divider,
  InputAdornment,
  Paper,
  TextField
} from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';

export const KnapsackProblem = () => {

  const [values, setValues] = useState({
    cost: 0,
    weight: 0
  });
  const [items, setItems] = useState([]);
  const [capacity, setCapacity] = useState(5);

  const maxTotals = [];

  for (let i = 0; i < items.length + 1; i += 1) {
    const row = new Array(capacity + 1).fill(0);
    maxTotals.push(row);
  }

  for (let i = 1; i < items.length + 1; i += 1) {
    const currentValue = items[i - 1][0];
    const currentWeight = items[i - 1][1];

    for (let j = 0; j < capacity + 1; j += 1) {
      if (currentWeight > j) {
        maxTotals[i][j] = maxTotals[i - 1][j];
      } else {
        maxTotals[i][j] = Math.max(
          maxTotals[i - 1][j],
          maxTotals[i - 1][j - currentWeight] + currentValue,
        );
      }
    }
  }

  const handleChange =
    (prop) => (event) => {
      console.log({
        ...values,
        [prop]: parseInt(event.target.value, 10)
      });

      setValues({
        ...values,
        [prop]: parseInt(event.target.value, 10)
      });
    };

  const addValue = () => {
    console.log(values);
    setItems([...items, [values.cost, values.weight]]);
    setValues({
      cost: 0,
      weight: 0
    });
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          '& .MuiTextField-root': {
            m: 1,
            width: '25ch'
          },
          '& hr': {
            mx: 1,
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Capacity"
          type="number"
          size="small"
          value={capacity}
          onChange={(event)=>setCapacity(parseInt(event.target.value, 10))}
          id="outlined-start-capacity"
        />
        <Divider orientation="vertical" flexItem/>
        <TextField
          label="Cost"
          type="number"
          size="small"
          value={values.cost}
          onChange={handleChange('cost')}
          id="outlined-start-cost"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          type="number"
          size="small"
          value={values.weight}
          onChange={handleChange('weight')}
          id="outlined-start-weight"
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
        />
        <Button size="medium" variant="outlined" onClick={addValue}>Add</Button>
      </Box>

      {Boolean(items.length) && <Box component="div">
        {maxTotals.map((row, rowIdx) => <Box
          key={rowIdx}
          sx={{
            display: 'flex',
            '& > :not(style)': {
              m: 0.1,
              textAlign: 'center',
              lineHeight: '64px',
              fontSize: 32,
              width: 64,
              height: 64,
            },
          }}
        >
          {row.map((cell, cellIdx) => <Paper key={`${rowIdx}_${cell}_${cellIdx}`} variant="outlined"
                                             square>
            {rowIdx === 0 ? cellIdx : (cellIdx === 0 ? JSON.stringify(items[rowIdx - 1]) : cell)}
          </Paper>)}
        </Box>)}
      </Box>}
    </>
  );
};
