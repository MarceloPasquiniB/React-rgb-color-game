import React, {useContext} from "react";
import { AppName, Grid, WhiteBackground, FlexWrapper } from "./style";
import ColorButtons from "../ColorButtons/ColorButton";
import StartProvider from "../Context/StartContext";
import StartButton from "../StartButton/StartButton";
import WinnerColor from "../WinnerCollor/WinnerColor";
import Message from "../Message/Message";

export default function MainPage() {


  return (
    <>
      <StartProvider>
        <FlexWrapper style={{ flexDirection: "column" }}>
          <AppName>The RGB Game</AppName>
          <WhiteBackground>
            <WinnerColor />
          </WhiteBackground>
          <Grid>
            <ColorButtons />
          </Grid>
          <FlexWrapper style={{ flexDirection: "column" }}>
            <Message />
          </FlexWrapper>
          <FlexWrapper>
            <StartButton />
          </FlexWrapper>
        </FlexWrapper>
      </StartProvider>
    </>
  );
}
