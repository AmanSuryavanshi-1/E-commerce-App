import { Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons';
import styled from 'styled-components'

const Container = styled.div`
display: flex;
`;

const Left = styled.div`
flex:1;
`;
const Logo = styled.h1``;
const Desc= styled.p``;
const SocialContainer = styled.div``;
const SocialIcon = styled.h1``;

const Center = styled.div`
flex:1;
`;

const Right = styled.div`
flex:1;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>AS.</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eius explicabo tenetur a maxime perferendis consectetur ipsam totam! Est numquam eum nostrum eius molestias sunt vero quis repudiandae. Sed, sint.</Desc>
        <SocialContainer>
            <SocialIcon>
                <Facebook/>
            </SocialIcon>
            <SocialIcon>
                <Instagram/>
            </SocialIcon>
            <SocialIcon>
                <Twitter/>
            </SocialIcon>
            <SocialIcon>
                <Pinterest/>
            </SocialIcon>
        </SocialContainer>
        </Left>
        <Center></Center>
        <Right></Right>
    </Container>
  )
}

export default Footer