import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import myLogo from '../images/main logo.png'
import {mobile} from "../responsive";

import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    background-color: #a0dbfd;
    /* @media only screen and (max-width:400px){

    } */
    /* instead of writing this function every time i can use this function  */
    ${mobile({height:"50px"})}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items : center;
    justify-content: space-between;
    ${mobile({padding:"10px 0px"})}
`
const Left = styled.div`
flex: 1;
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
    ${mobile({marginLeft: '10px',width:"50px"})}
`;

const Input = styled.input`
    border:none;
    width:100%;
    ${mobile({width:"50px"})}
`;

const Center = styled.div`
    flex:1; 
    text-align: center;
    /*  added for alignment of LOGO */
    ${mobile({margin: "0"})}
`;

const Logo = styled.img`
height:45px;
width:120px;
${mobile({height:"20px",width:"55px"})}
`;

const Right = styled.div`
    flex:1; 
    display: flex;
    align-items: center;
    justify-content: flex-end;
${mobile({justifyContent:"center" ,flex:2})}

`;
const HomeContainer = styled.div`
font-size:17px;
font-weight: 500;
padding-left: 5px;
letter-spacing: 1px;
    cursor: pointer;
    ${mobile({fontSize:"12px",marginLeft: "10px",fontWeight: 200})}
`;

const MenuItem = styled.div`
    font-size:17px;
    letter-spacing: 1px;
    font-weight: 500;
    cursor:pointer;
    margin-left: 25px;
${mobile({fontSize:"12px",marginLeft: "10px",fontWeight: 200})}

`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <HomeContainer><Link to = "/" style={{color:"black"}}> HOME</Link></HomeContainer>
                <SearchContainer>
                    <Input placeholder='search'/>
                    <Search style={{color:"darkblue", fontSize: "16px"}}/>
                </SearchContainer>
            </Left>

            <Center><Logo src={myLogo}/></Center>
            
            <Right>
                <MenuItem><Link to="/Register" style={{color:"black"}}>REGISTER</Link></MenuItem>
                <MenuItem><Link to="/Login" style={{color:"black"}}>SIGN IN</Link></MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                    <Link to="/Cart" style={{color:"black"}}><ShoppingCartOutlined /></Link>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
        </Container>
  )
}

export default Navbar