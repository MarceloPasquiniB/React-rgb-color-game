import React, { useContext, useEffect, useState } from "react";
import { StartContext } from "../Context/StartContext";
import { StartButton } from "./style";

export default function ColorButtons() {
  const {
    start,
    setStart,
    winnerColorPosition,
    buttonClicked,
    setButtonClicked,
  } = useContext(StartContext);

  const [displayReset, setDisplayReset] = useState(false);

  useEffect(() => {
    if (buttonClicked != undefined && buttonClicked == winnerColorPosition) {
      setDisplayReset(true);
    }
  }, [buttonClicked]);

const handleRestart = () =>{
  setStart(false)
  setButtonClicked(void(0))
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