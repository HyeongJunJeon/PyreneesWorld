import React from "react";
import styled from "styled-components";

const BannerText = () => {
  return (
    <TextWrapper>
      <p>
        그레이트 피레니즈는 초대형 견종으로
        <br /> 몸길이 160~180cm, 키 65~82cm,몸무게 41~80kg 정도에요. 정말 크죠?
      </p>
      <DetailBtn>더 자세히 알고 싶어요!</DetailBtn>
    </TextWrapper>
  );
};

export default BannerText;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  p {
    margin-right: 30px;
  }
`;
const DetailBtn = styled.button`
  color: white;
  background-color: #9450e7;
  border: 1px solid black;
  border-radius: 30px;
  cursor: pointer;
`;