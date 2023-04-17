import Navbar from '../components/Navbar';
import { Add, Announcement, Remove } from '@material-ui/icons';
import Newsletter from '../components/Newsletter';
import styled from 'styled-components';
import Footer from '../components/Footer';
import img from '../images/Shoes.png'

const Container = styled.div``;
const Wrapper = styled.div`
padding: 50px;
display: flex;
`;
const ImgContainer = styled.div`
flex: 1;
`;
const Image = styled.img`
width: 100%;
height: 80vh;
object-fit: cover; // cover cancrop the image
`;
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`;
const Title = styled.h1`
font-weight: 200;
`;
const Desc = styled.p`
margin:20px 0px;
`;
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`;

const FilterContainer =styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;

`;

const Filter =styled.div`
display: flex;
align-items: center;
`;

const FilterTitle =styled.span`
font-size: 20px;
font-weight: 200;
`;

const FilterColor =styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`;

const FilterSize =styled.select`
margin-left:20px;
padding: 5px;
`;

const FilterSizeOption =styled.option``;

const AddContainer =styled.div`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between;
`;

const AmountContainer =styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;

const Amount =styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
`;

const Button =styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;
border-radius: 10px;

&:hover{
    background-color: #c7f6f6;
}
`;



const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>

            <ImgContainer>
                <Image src={img} />
            </ImgContainer>

            <InfoContainer>
                <Title>JORDAN</Title>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas inventore est, autem quidem repellendus voluptatem reprehenderit possimus non deserunt dicta, accusantium eum harum quibusdam temporibus ex ullam cum, eveniet officiis!
                </Desc>
                <Price>₹ 250</Price>

                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"></FilterColor>
                        <FilterColor color="blue"></FilterColor>
                        <FilterColor color="lightgray"></FilterColor>
                    </Filter>

                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>

                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove></Remove>
                        <Amount> 1 </Amount>
                        <Add></Add>
                    </AmountContainer>
                    <Button>Add to cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product