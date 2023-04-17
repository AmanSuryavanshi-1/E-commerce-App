import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import myLogo from '../images/main logo.png'
const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding:10px 20px;
    display: flex;
    align-items : center;
    justify-content: space-between;
    /* background-color: #e9bb7f; */
`
const Left = styled.div`
flex: 1;
display: flex; 
align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer =styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border:none;
`;

const Center = styled.div`
    flex:1; 
    text-align: center;
    margin: -3px;  /*  added for alignment of LOGO */
    margin-bottom: -30px;
    
`;

const Logo = styled.img`
height:45px;
width:120px;
`;

const Right = styled.div`
    flex:1; 
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size:16px;
    cursor:pointer;
    margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
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