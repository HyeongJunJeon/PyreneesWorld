import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Commnet from "./components/Commnet";

const Detail = () => {
  const [detailData, setDetailData] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/data/ListData.json")
      .then((res) => res.json())
      .then((data) => {
        setDetailData(data[params.id - 1]);
      });
  }, []);

  return (
    <Wrapper>
      <img src={detailData.image_url} alt="dog" />
      <p>이름: {detailData.name}</p>
      <p>설명: {detailData.text}</p>

      <Commnet />
    </Wrapper>
  );
};

export default Detail;

const Wrapper = styled.div`
  max-width: 1360px;
  margin: 20px auto;
  text-align: center;
  font-size: 30px;

  img {
    width: 300px;
    border-radius: 50%;
  }
`;
