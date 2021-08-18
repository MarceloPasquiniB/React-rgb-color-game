import React, { useContext, useEffect, useState } from "react";
import { StartContext } from "../Context/StartContext";
import { StartButton } from "./style";

export default function ColorButtons() {
  const {
    start,
    setStart,
    setRGBArray,
    winnerColorPosition,
    buttonClicked,
    setButtonClicked,
  } = useContext(StartContext);

  const [displayReset, setDisplayReset] = useState(false);

  useEffect(() => {
    if (buttonClicked !== undefined && Number(buttonClicked) === Number(winnerColorPosition)) {
      setDisplayReset(true);
    }
  }, [buttonClicked]);

const handleRestart = () =>{
  setStart(false)
  //When the Reset button is clicked, it will void the actual state of "ButtonClicked", returning undefined.
  //That will trigger a conditional rendering, hiding the buttons and the message from the screen.
  // It will also reset RGBArray to an empty array, allowing to create new colors in the next render.
  setButtonClicked(void(0))
  setRGBArray([])
  setDisplayReset(false)
}


  if (!start) {
    return (
      <StartButton value={start} onClick={() => setStart(true)}>
        START
      </StartButton>
    );
  } else if (displayReset) {
    return <StartButton onClick={(e) => handleRestart(e)}>RESTART</StartButton>;
  } else return null;
}
