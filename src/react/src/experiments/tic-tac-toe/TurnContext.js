import React from "react";

// set the defaults
const TurnContext = React.createContext({
  turn: true,
  setTurn: (state) => !state
});

export default TurnContext;
