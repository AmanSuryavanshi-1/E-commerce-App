import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import myLogo from '../images/main logo.png'
import {mobile} from "../responsive";

const Container = styled.div`
    height: 60px;

    /* @media only screen and (max-width:400px){

    } */
    /* instead of writing this fuction evertime i can use this function  */
    ${mobile({height:"50px"})}

`;

const Wrapper = styled.div`
    padding:10px 20px;
    display: flex;
    align-items : center;
    justify-content: space-between;
    /* background-color: #e9bb7f; */
    ${mobile({padding:"10px 0px"})}
`
const Left = styled.div`
flex: 1;
display: flex; 
align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}
/* we dont need to display language EN for smaller devices we can hide it by display:none */
`;

const SearchContainer =styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({marginLeft: '10px'})}
`;

const Input = styled.input`
    border:none;
    ${mobile({width:"50px"})}
`;

const Center = styled.div`
    flex:1; 
    text-align: center;
    /*  added for alignment of LOGO */
    margin-bottom: -20px;
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

const MenuItem = styled.div`
    font-size:16px;
    cursor:pointer;
    margin-left: 25px;
${mobile({fontSize:"12px",marginLeft: "10px"})}

`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='search'/>
                    <Search style={{color:"gray", fontSize: "16px"}}/>
                </SearchContainer>
            </Left>

            <Center><Logo src={myLogo}/></Center>
            
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
        </Container>
  )
}

export default Navbar