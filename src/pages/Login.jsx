import styled from "styled-components"
import {mobile} from "../responsive";
// import Announcement from '../components/Announcement'
import Navbar from "../components/Navbar";


const ParentContainer = styled.div``;

const Container = styled.div`
width: 100vw;
height: calc(100vh - 60px);
/* total view port - height of navbar 60px */
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center; 
    background-size: cover;
display: flex;
align-items: center;
justify-content: center;
${mobile({backgroundSize: "200% 100%",backgroundRepeat:"no-repeat"})};
`;

// const Logo = styled.img`
// height: 100px;
// width: 150px;
// position: absolute;
// top:0px;
// left: 0px;
// ${mobile({height:"70px",width:"100px"})};
// `;

const Wrapper = styled.div`
padding: 20px;
width: 30%;
background-color: white;
border-radius: 20px;
${mobile({width:"75%"})};

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
letter-spacing: 0.5px;
`;

const Login = () => {
  return (
    <ParentContainer>
    <Navbar/>
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
</ParentContainer>
  )
}

export default Login