import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";
import reset from "styled-reset";
import { darkTheme, lightTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
${reset}
  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor}
  }`;

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lightStateText, setLightStateText] = useState(false);

  const navigate = useNavigate();

  const aboutOnOffDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    setLightStateText((prev) => !prev);
  };

  const goToMain = () => {
    navigate(`/`);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <NavWrapper>
        <HomeImg
          src="https://cdn.pixabay.com/photo/2022/03/14/13/51/dog-7068245__340.png"
          alt="logo"
        ></HomeImg>
        <MainText>
          전형준의
          <br /> 피레니즈 월드!
        </MainText>

        <EmptyDiv></EmptyDiv>

        <GoToMainPage onClick={goToMain}>HOME</GoToMainPage>

        <ModeBtn onClick={aboutOnOffDarkMode}>
          {lightStateText ? "💡" : "🌙"}
        </ModeBtn>
      </NavWrapper>
    </ThemeProvider>
  );
};

export default Nav;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 100px;
  border: 1px solid gainsboro;
  font-size: 20px;
`;

const HomeImg = styled.img`
  border: 1px solid #9450e7;
  border-radius: 30%;
`;

const MainText = styled.p`
  min-width: 120px;
  padding: 30px 0 0 20px;
  border-left: 1px solid gainsboro;
`;

const EmptyDiv = styled.div`
  width: 1000px;
`;

const GoToMainPage = styled.button`
  color: white;
  background-color: #9450e7;
  border-radius: 50%;
  cursor: pointer;
`;

const ModeBtn = styled.div`
  font-size: 40px;
  padding: 30px 10px;
  cursor: pointer;
`;
