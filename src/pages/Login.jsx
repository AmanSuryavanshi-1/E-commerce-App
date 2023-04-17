import styled from "styled-components"
// import image from "../images/electronics-removebg-preview (1).png"

const Container = styled.div`
width: 100vw;
height: 100vh;
/* background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
),
    url(image); */ 
    background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
padding: 20px;
width: 30%;
background-color: white;
`;

const Title = styled.h1`
font-weight: 24px;
font-weight: 300;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
`;


const Input = styled.input`
flex:1;
min-width: 40%;
margin:10px 0px;
padding: 10px;
`;

const Button = styled.button`
width: 40%;
border:none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;
`;
const Link = styled.a`
margin: 10px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
            <Button>LOGIN</Button>
            <Link>FORGOT PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login