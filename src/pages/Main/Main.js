import React from "react";
import styled from "styled-components";
import BannerText from "./component/BannerText";

const Main = () => {
  return (
    <MainWrapper>
      <img
        src="https://cdn.pixabay.com/photo/2019/07/21/13/02/great-pyrenees-4352728_1280.jpg"
        alt="puppy"
      ></img>

      <BannerText />
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  max-width: 1350px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 600px;
  }
`;
