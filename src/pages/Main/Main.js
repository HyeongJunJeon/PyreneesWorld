import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import BannerText from "./component/BannerText";
import MainCarousel from "./component/MainCarousel";
import reset from "styled-reset";
import { darkTheme, lightTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
${reset}
  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor}
  }`;

const Main = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lightStateText, setLightStateText] = useState(false);

  const aboutOnOffDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    setLightStateText((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <MainWrapper>
        <img
          src="https://cdn.pixabay.com/photo/2019/07/21/13/02/great-pyrenees-4352728_1280.jpg"
          alt="puppy"
        ></img>
        <BannerText />
        <MainCarousel />
        <ModeBtn onClick={aboutOnOffDarkMode}>
          {lightStateText ? "주간모드" : "야간모드"}
        </ModeBtn>
      </MainWrapper>
    </ThemeProvider>
  );
};

export default Main;

const MainWrapper = styled.div`
  max-width: 1350px;
  margin: 50px auto;

  img {
    width: 100%;
    height: 600px;
  }
`;

const ModeBtn = styled.button`
  margin: 20px 650px;
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;
