import { Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons';
import styled from 'styled-components'
import myLogo from '../main logo.png'

const Container = styled.div`
display: flex;
`;

const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Image = styled.img`
height: 50px;
width: 120px;
`;

const Desc= styled.p`
margin: 20px 0px ;
`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.h1`
width: 40px;
height: 40px;
border-radius: 50%;
color: white; 
background-color: #${props=>props.color};
/* take props and (=>) look inside for color (props.color) */
/* like this we can give different background color to each socialicon by taking the data from the container as props */
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Center = styled.div`
flex:1;
padding: 20px;
`;

const Title = styled.h3`

`;

const List = styled.ul`

`;
const ListItem = styled.li`

`;

const Right = styled.div`
flex:1;
padding: 20px;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Image src={myLogo}/>
            <Desc>Welcome to our online store! Our footer section is designed to help you navigate through our website and find the products you need easily. At the bottom of the page, you'll find links to important pages such as our homepage, product categories, and contact information. We've also included links to our social media accounts, so you can stay up to date with our latest products and promotions. In addition to these navigation links, our footer section also contains legal information such as disclaimers, terms and conditions, and privacy policies. We take your privacy and security seriously, and we want to make sure you understand our policies and how we protect your personal information. To further demonstrate our commitment to your security, we've included logos of trusted payment and security providers. When you shop with us, you can feel confident knowing that your payment information is safe and secure. Thank you for choosing our online store for your shopping needs. We hope you have a great experience on our website, and please don't hesitate to contact us if you have any questions or concerns.</Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="E4405f">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter/>
            </SocialIcon>
            <SocialIcon color="E60023">
                <Pinterest/>
            </SocialIcon>
        </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
            </List>
        </Center>

        <Right>

        </Right>
    </Container>
  )
}

export default Footer