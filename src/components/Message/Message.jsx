import React, { useContext } from "react";
import { StartContext } from "../Context/StartContext";
import { Title } from "./style";

export default function Message() {
  const { start, buttonClicked, winnerColorPosition } = useContext(StartContext);



  //Button undefined means the game hasn't started yet. The button value is only set when the player clicks on some button.

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
