import React, { useContext } from "react";
import { StartContext } from "../Context/StartContext";
import { Title } from "../WinnerCollor/style";

export default function Message() {
  const { start, buttonClicked, winnerColorPosition } = useContext(StartContext);

  if(buttonClicked == undefined || !start){
      return null
  } else if (buttonClicked != undefined && buttonClicked != winnerColorPosition) {
    return (
      <>
        <Title>Wrong Color! Try Again!</Title>
      </>
    );
  } else {
    return (
      <>
        <Title>Good! You're right!</Title>
        <Title>Let's play again?</Title>
      </>
    );
  }
}
