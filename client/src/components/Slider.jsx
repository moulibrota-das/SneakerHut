import { ArrowBackIos, ArrowForwardIos, ViewColumn } from "@material-ui/icons";
import { React, useState } from "react";
import { sliderItems } from "../data";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
width: 100%;

  height: 100vh;
   display flex;
  position: relative;
  overflow: hidden;
  ${mobile({ height: "30vh" })};
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  ${(props) => props.direction}: 10px;
  cursor: pointer;
  opacity: 40%;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bg};
  ${mobile({ height: "30vh" })};
`;
const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
`;
const Image = styled.img`
  margin-left: 5%;
  height: 80%;
  flex: 1;
`;
const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 70px;
  ${mobile({ fontSize: "16px" })};
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({ fontSize: "8px", margin: "5px 0px" })};
`;

const Button = styled.button`
  border: 2px solid black;
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  ${mobile({ fontSize: "6px", border: "1px solid black" })};
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIos />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIos />
      </Arrow>
    </Container>
  );
};

export default Slider;
