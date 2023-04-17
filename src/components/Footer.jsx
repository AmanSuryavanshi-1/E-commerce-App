<<<<<<< HEAD
import {Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import styled from 'styled-components'
import myLogo from '../images/main logo.png'
import payment from '../images/payment.png'
=======
import { Description, Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import styled from 'styled-components'
import myLogo from '../main logo.png'
import payment from '../payment.png'
>>>>>>> aac95d61b0e9554766577608050a414eb328d54a

const Container = styled.div`
display: flex;
`;

const Left = styled.div`
flex: 1.3;
display: flex;
flex-direction: column;
padding: 20px;

`;
const Logo = styled.img`
height: 30px;
width: 80px;
`;

const Desc= styled.p`
margin: 20px 0px ;
text-align: justify;
letter-spacing: 1px;
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
margin-bottom: 30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
/* putting margin and padding = 0 bcz when u create ul it have its on margin and padding */
list-style: none;
display: flex;
flex-wrap: wrap;

`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right = styled.div`
flex:1;
padding: 20px;
`;

const ContactItem =styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;
<<<<<<< HEAD

const Payment =styled.img`
width:50%;
`;
=======
>>>>>>> aac95d61b0e9554766577608050a414eb328d54a

const Payment =styled.img`
width:50%;
`;
// const Bottom = styled.div`
// display: flex;
// flex-wrap: wrap;
// `;
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo src={myLogo}/>
            <Desc>Welcome to our online store! Our footer section is designed to help you navigate through our website and find the products you need easily. At the bottom of the page, you'll find links to important pages such as our homepage, product categories, and contact information. We've also included links to our social media accounts, so you can stay up to date with our latest products and promotions.</Desc>
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
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>
                255 ASide Street, Delhi 10890
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>
                +91 1234567890
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/>
                amansuryavanshi2002@gmail.com
            </ContactItem>
            <Payment src={payment}/>
        </Right>
<<<<<<< HEAD
=======

        {/* <Bottom>
        </Bottom> */}
>>>>>>> aac95d61b0e9554766577608050a414eb328d54a
        {/* In addition to these navigation links, our footer section also contains legal information such as disclaimers, terms and conditions, and privacy policies. We take your privacy and security seriously, and we want to make sure you understand our policies and how we protect your personal information. To further demonstrate our commitment to your security, we've included logos of trusted payment and security providers. When you shop with us, you can feel confident knowing that your payment information is safe and secure. Thank you for choosing our online store for your shopping needs. We hope you have a great experience on our website, and please don't hesitate to contact us if you have any questions or concerns. */}
    </Container>
  )
}

export default Footer