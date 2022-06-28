import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const goToList = () => {
    navigate(`/list`);
  };

  const goToMain = () => {
    navigate(`/`);
  };

  return (
    <NavWrapper>
      <div>
        전형준의
        <br />
        피레니즈 월드
      </div>
      <button onClick={goToList}>피레니즈 자세히보기</button>

      <button onClick={goToMain}>홈으로!</button>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-evenly;
  height: 100px;
  border: 1px solid gainsboro;
  font-size: 20px;

  button {
    color: white;
    background-color: #9450e7;
    border-radius: 5px;
  }
`;
