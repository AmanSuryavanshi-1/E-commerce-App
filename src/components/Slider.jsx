import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components"
import {sliderItems} from "../data"
import { useState } from "react";
import {mobile} from "../responsive";


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    position: relative;
    overflow: hidden; /* it will hide both x and y scrollbar */
    ${mobile({display:"none"})}
    /* no need to show slider on mobile */
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props)=>props.slideIndex * -100}vw);   /* bcz we want to move slider in x direction */
`;

const Slide = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
background-color: #${(props)=>props.bg}; 
/* In React, the # symbol is sometimes used in front of props when using the new React 18 syntax for handling props. This syntax is called "automatic batching" and allows multiple updates to the same component to be batched together for performance optimization. */
/* props are used to change background as the slides changes */
`;

const ImgContainer = styled.div`
flex:1;
height: 100%;
`;

const Image = styled.img`
object-fit: fill;
height: 80%;
width: 40vw;

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
letter-spacing: 2px;
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
    /* ///////?? */
`;


const Slider = () => {
    
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 3);
        }
        else{
            setSlideIndex(slideIndex < 3 ? slideIndex+1 : 0);
        }
    };

    return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>      {/* prop created */}
            <ArrowLeftOutlined/>
        </Arrow>

        <Wrapper slideIndex={slideIndex}>

            {sliderItems.map((item=>( 
                // it will take data from sliderItems in data.js and then will create a key value pairs  

            <Slide bg={item.bg} key={item.id}>  
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