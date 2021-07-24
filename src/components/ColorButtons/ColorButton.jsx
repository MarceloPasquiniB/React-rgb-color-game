import React, { useContext, useEffect, useState } from "react";
import { StartContext } from "../Context/StartContext";
import { ButtonColor } from "./style";

const random1 = Math.floor(Math.random() * 256);

export default function ColorButtons() {
  const { start, setWinnerColor, setWinnerColorPosition, setButtonClicked } =
    useContext(StartContext);

  const [RGBArray, setRGBArray] = useState([]);

  useEffect(() => {
    var tempArray = new Array();
    var singleRGB = 0;
    for (var i = 0; i < 12; i++) {
      singleRGB = Math.floor(Math.random() * 256);
      tempArray.push(singleRGB);
    }
    setRGBArray(tempArray);
    console.log(RGBArray);
  }, [start]);

  console.log(RGBArray);

  const RGB = String(`rgb(${RGBArray[0]}, ${RGBArray[1]}, ${RGBArray[2]})`);
  const RGB2 = String(`rgb(${RGBArray[3]}, ${RGBArray[4]}, ${RGBArray[5]})`);
  const RGB3 = String(`rgb(${RGBArray[6]}, ${RGBArray[7]}, ${RGBArray[8]})`);
  const RGB4 = String(`rgb(${RGBArray[9]}, ${RGBArray[10]}, ${RGBArray[11]})`);

  const color1 = start === true ? RGB : "rgb(255, 255, 255)";
  const color2 = start === true ? RGB2 : "rgb(255, 255, 255)";
  const color3 = start === true ? RGB3 : "rgb(255, 255, 255)";
  const color4 = start === true ? RGB4 : "rgb(255, 255, 255)";

  var ColorArray = [color1, color2, color3, color4];

  useEffect(() => {
    //random is for get a random number to compare color
    const random = Math.floor(Math.random() * ColorArray.length);
    //This useEffect prevents the ColorArray[random] to run every time a button is clicked
    setWinnerColor(ColorArray[random]);
    setWinnerColorPosition(ColorArray.indexOf(ColorArray[random]));
  }, [start]);

  function handleClick(e) {
    setButtonClicked(e.target.id);
  }

  if (start) {
    return (
      <>
        <ButtonColor
          id="0"
          onClick={(e) => handleClick(e)}
          style={{ backgroundColor: `${ColorArray[0]}` }}
        ></ButtonColor>
        <ButtonColor
          id="1"
          onClick={(e) => handleClick(e)}
          style={{ backgroundColor: `${ColorArray[1]}` }}
        ></ButtonColor>
        <ButtonColor
          id="2"
          onClick={(e) => handleClick(e)}
          style={{ backgroundColor: `${ColorArray[2]}` }}
        ></ButtonColor>
        <ButtonColor
          id="3"
          onClick={(e) => handleClick(e)}
          style={{ backgroundColor: `${ColorArray[3]}` }}
        ></ButtonColor>
      </>
    );
  }else{
    return null
  }
}
