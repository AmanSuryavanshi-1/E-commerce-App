import styled from "styled-components"
// import image from "../images/electronics-removebg-preview (1).png"
import logo from "../images/main logo.png"
import {mobile}from "../responsive";


const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
    background-size: cover;
display: flex;
align-items: center;
justify-content: center;
${mobile({backgroundSize: "200% 100%",backgroundRepeat:"no-repeat"})};

`;

const Logo = styled.img`
height: 100px;
width: 150px;
position: absolute;
top:0px;
left: 0px;
${mobile({height:"70px",width:"100px"})};
`;

const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color: white;
border-radius: 20px;
${mobile({width:"75%",height:"70vh"})};

`;

const Title = styled.h1`
font-weight: 24px;
font-weight: 300;
${mobile({fontWeight:"8px",fontWeight:"100"})};
`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;


const Input = styled.input`
flex:1;
min-width: 40%;
margin:20px 10px 0px 0px;
padding: 10px;
`;

const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;

const Button = styled.button`
width: 40%;
border:none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
        <Logo src={logo}/>
        <Wrapper>
            <Title>Sign Up with your Email to get started</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>BY creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register