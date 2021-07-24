import React, { createContext, useState } from "react";

export const StartContext = createContext();

export default function StartProvider({ children }) {
  const [start, setStart] = useState(false);
  const [winnerColor, setWinnerColor] = useState(0);
  const [buttonClicked, setButtonClicked] = useState();
  const [winnerColorPosition, setWinnerColorPosition] = useState();
  return (
    <StartContext.Provider
      value={{
        start,
        setStart,
        winnerColor,
        setWinnerColor,
        buttonClicked,
        setButtonClicked,
        winnerColorPosition,
        setWinnerColorPosition
      }}
    >
      {children}
    </StartContext.Provider>
  );
}
