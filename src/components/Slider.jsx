import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components"
// import girl from "./girl.jpg"
import {sliderItems} from "../data"
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
    transform: translateX(-300vw);   /* bcz we want to move slider in x direction */
    /* if we move -100vw in x direction next slide wil appear the same goes on to -200 & -300(3rd slide) */
`;

const Slide = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
background-color: #${props=>props.bg};
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
    z-index: 2;
`;


const Slider = () => {
    
    // const [slidIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{

    }

    return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>      {/* prop created */}
            <ArrowLeftOutlined/>
        </Arrow>

        <Wrapper>

            {sliderItems.map((item=>(

            <Slide bg={item.bg}>
                <ImgContainer>
                     <Image src={item.img}></Image>
                </ImgContainer>

                <InfoContainer> 
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
            )))}

            {/* Creating another slide by taking data from data.js*/}  
        </Wrapper>

        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider