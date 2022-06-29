import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PC } from "../MediaQuery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainCarousel = () => {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/carouselData.json")
      .then((res) => res.json())
      .then((data) => {
        setCarouselData(data);
      });
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <Wrapper>
      <PC>
        <InfoText>
          피레니즈 월드의
          <br /> 장난꾸러기들!
        </InfoText>
      </PC>

      <Wrap>
        <Slider {...settings}>
          {carouselData.map((data) => {
            return (
              <DogInfo key={data.id}>
                <img className="carouselImg" src={data.image_url} alt="dog" />
                <p>{data.name}</p>
                <p className="carouselText">{data.text}</p>
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
  max-width: 1350px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  border: 1px solid gainsboro;
`;

const Wrap = styled.div`
  width: 710px;

  .slick-prev:before,
  .slick-next:before {
    opacity: 1;
    color: black;
    position: relative;
    top: 150px;
    right: 100px;
  }
  .slick-next:before {
    right: 750px;
  }
`;

const InfoText = styled.div`
  width: 610px;
  font-size: 36px;
  padding-top: 20px;
  padding-left: 30px;

  /* @media screen and (max-width: 880px) {
    display: none;
  } 이런식으로 줄수도 있고, react-responsive사용 할수도 있고, 무엇이 편한지는 본인판단일 것 같다.*/
`;

const DogInfo = styled.div`
  border-left: 1px solid gainsboro;
  text-align: center;
  font-size: 30px;
  .carouselImg {
    margin: 100px auto;
    width: 180px;
    height: 180px;
    border-radius: 5px;

    @media screen and (max-width: 880px) {
      width: 300px;
    }
  }
  .carouselText {
    margin: 20px auto;
    font-size: 20px;
    color: #676767;
  }
`;
