import React, { createContext, useState } from "react";

export const StartContext = createContext();

export default function StartProvider({ children }) {
  const [start, setStart] = useState(false);
  const [RGBArray, setRGBArray] = useState([]);
  const [winnerColor, setWinnerColor] = useState(0);
  const [buttonClicked, setButtonClicked] = useState();
  const [winnerColorPosition, setWinnerColorPosition] = useState();
  return (
    <StartContext.Provider
      value={{
        start, //Indicates whether the game has started.
        setStart,
        RGBArray, // Creates an Array with 12 numbers, that will be used to create 3 RGB colors.
        setRGBArray,
        winnerColor, //Indicates the winner color.
        setWinnerColor,
        buttonClicked, //Indicates the ID of the button that was clicked.
        setButtonClicked,
        winnerColorPosition, //Indicates the array position of the winner color.
        setWinnerColorPosition
      }}
    >
      {children}
    </StartContext.Provider>
  );
}
