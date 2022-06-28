import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainCarousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/carouselData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <InfoText>
        피레니즈 월드의
        <br /> 장난꾸러기들!
      </InfoText>

      <Wrap>
        <Slider {...settings}>
          {data.map((data) => {
            return (
              <DogInfo key={data.id}>
                <img className="carouselImg" src={data.image_url} alt="dog" />
                <p>{data.name}</p>
                <p>{data.text}</p>
              </DogInfo>
            );
          })}
        </Slider>
      </Wrap>
    </Wrapper>
  );
};

export default MainCarousel;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  border: 1px solid gainsboro;
`;

const Wrap = styled.div`
  margin: 0 auto;
  width: 710px;

  .slick-prev:before {
    opacity: 1;
    color: black;
    position: relative;
    top: 150px;
    right: 100px;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
    position: relative;
    top: 150px;
    right: 750px;
  }
`;

const InfoText = styled.div`
  width: 610px;
  font-size: 36px;
  padding-top: 20px;
  padding-left: 30px;
`;

const DogInfo = styled.div`
  border-left: 1px solid gainsboro;
  width: 320px;
  text-align: center;
  font-size: 30px;
  .carouselImg {
    margin: 100px auto;
    width: 180px;
    height: 180px;
    border-radius: 5px;
  }
`;
