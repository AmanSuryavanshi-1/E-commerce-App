import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import myLogo from '../images/main logo.png'
import {mobile} from "../responsive";

import { NavLink } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    background-color: #e1f4ff;
    /* @media only screen and (max-width:400px){

    } */
    /* instead of writing this function every time i can use this function  */
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items : center;
    justify-content: space-between;
    ${mobile({padding:"10px 0px"})}
    /* background-color: #e9bb7f; */
    ${mobile({padding:"10px 0px"})}
`
const Left = styled.div`
flex: 0.5;
display: flex; 
align-items: center;
`;

const SearchContainer =styled.div`
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    width:80%;
    ${mobile({marginLeft: '5px',width:"60px"})}
`;

const Input = styled.input`
    border:none;
    width:100%;
    ${mobile({width:"40px"})}
`;

const Center = styled.div`
display: flex; 
align-items: center;
justify-content: flex-start;
flex:2;
${mobile({margin: "0"})}
`;

const Logo = styled.img`
height:45px;
width:120px;
${mobile({height:"20px",width:"55px"})}
`;

const Right = styled.div`
    flex:2; 
    display: flex;
    align-items: center;
    justify-content: flex-end;

`;
const HomeContainer = styled.div`
font-size:17px;
font-weight: 500;
letter-spacing: 1px;
    cursor: pointer;
    ${mobile({fontSize:"12px",marginLeft: "5px",letterSpacing:"0px",paddingLeft:"0px"})}

    padding: 10px;
    &:hover{
        background-color: #e1f4ff;
        border-radius: 10px;
        box-shadow: 2px 3px 5px #a1dbff ;
    }
`;

const MenuItem = styled.div`
    font-size:17px;
    letter-spacing: 1px;
    font-weight: 500;
    cursor:pointer;
    margin-left: 25px;
${mobile({fontSize:"12px",marginLeft: "5px",letterSpacing:"0px",paddingLeft:"0px"})}

padding: 10px;
    &:hover{
        background-color: #e1f4ff;
        border-radius: 10px;
        box-shadow: 3px 3px 5px #a1dbff ;
    }
`;


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
            <Logo src={myLogo}/>
            </Left>

            <Center>
            <HomeContainer className='home-link'><NavLink to = "/" style={{color:"black",textDecoration:"none"}}> HOME</NavLink></HomeContainer>
                <SearchContainer>
                    <Input placeholder='search'/>
                    <Search style={{color:"darkblue", fontSize: "16px" }}/>
                </SearchContainer>
            </Center>
            
            <Right>
                <MenuItem><NavLink to="/Register" style={{color:"black",textDecoration:"none"}}>REGISTER</NavLink></MenuItem>
                <MenuItem><NavLink to="/Login" style={{color:"black",textDecoration:"none"}}>LOGIN</NavLink></MenuItem>
                <MenuItem>
                    <Badge badgeContent={2} color="primary">
                    <NavLink to="/Cart" style={{color:"black"}}><ShoppingCartOutlined /></NavLink>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
        </Container>
  )
}

export default Navbar