import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components"
import girl from "./girl.jpg"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    position: relative;
    overflow-x: hidden;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`;

const Slide = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
`;

const ImgContainer = styled.div`
flex:1;
height: 100%;
`;

const Image = styled.img`
height: 80%;
padding: 30px;      /*   maine add kiya  */
`;

const InfoContainer = styled.div`
flex:1;
padding: 50px;
`;

const Title = styled.h1`
font-size: 70px;
`;

const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;

const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;

const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color: #cecece;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"}; /* if direction is left its gonna be 10px from left  */
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">      {/* prop created */}
            <ArrowLeftOutlined/>
        </Arrow>

        <Wrapper>
            <Slide>
                <ImgContainer>
                     <Image src={girl}></Image>
                </ImgContainer>

                <InfoContainer> 
                    <Title>SUMMER SALE</Title>
                    <Desc>DON'T COMPROMISE ON STYLE GET FLAT 70% OFF FOR NEW ARRIVALS. </Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>

            {/* Creating another slide */}

            <Slide>
                <ImgContainer>
                     <Image src={girl}></Image>
                </ImgContainer>

                <InfoContainer> 
                    <Title>CLEARANCE SALE</Title>
                    <Desc>DON'T COMPROMISE ON STYLE GET FLAT 70% OFF FOR NEW ARRIVALS. </Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>

            <Slide>
                <ImgContainer>
                     <Image src={girl}></Image>
                </ImgContainer>

                <InfoContainer> 
                    <Title>FURNITURE BESTSELLERS</Title>
                    <Desc>DON'T COMPROMISE ON STYLE GET FLAT 70% OFF FOR NEW ARRIVALS. </Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>

            <Slide>
                <ImgContainer>
                     <Image src={girl}></Image>
                </ImgContainer>

                <InfoContainer> 
                    <Title>BIG DISCOUNT ON ELECTRONIC ITEMS!</Title>
                    <Desc>DON'T COMPROMISE ON STYLE GET FLAT 70% OFF FOR NEW ARRIVALS. </Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>

        <Arrow direction="right">
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider