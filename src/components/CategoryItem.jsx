import styled from "styled-components";
import {mobile}from "../responsive";
import { NavLink } from "react-router-dom";

const Container = styled.div`
flex:1;
margin: 3px;
height: 60vh;
position: relative;
`;
const Image = styled.img`
width:100%;
height: 95%;
object-fit: cover;
border-radius: 5px;
${mobile({height:"40vh"})}

`;
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Title = styled.h1`
color: #fbfbfb;
text-shadow: 2px 2px 5px black;
margin-bottom: 20px;
`;
const Button = styled.button`
border:none;
padding: 10px;
background-color: white;
border-radius: 5px;
color: #080808;
cursor: pointer;
font-weight: 600;

&:hover{
  background-color: #e0e0e0;
}
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src= {item.img}/>
        <Info>
          <Title>{item.title}</Title>
          <NavLink to={item.link} style={{color:"black"}}> <Button>SHOP NOW</Button> </NavLink>
        </Info>
    </Container>
  )
}

export default CategoryItem