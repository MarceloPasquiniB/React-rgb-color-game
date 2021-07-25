import React, { useContext } from "react";
import { Title, Wrapper } from "./style";
import { StartContext } from "../Context/StartContext";

export default function WinnerColor() {
  const { start, winnerColor } = useContext(StartContext);

  if (start) {
    return (
      <Wrapper>
        <Title>Can you discovery this color?</Title>
        <Title>{winnerColor}</Title>
      </Wrapper>
    );
  } else return null;
}
