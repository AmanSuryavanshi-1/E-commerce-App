import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import shoes from "../images/Shoes_2.png"
import shoes2 from "../images/Shoes.png"
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
padding: 20px;
`;

const Title = styled.h1`
font-weight: 300;
text-align: center;
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props)=>props.type === "filled" && "none"};
  background-color: ${(props)=>props.type === "filled" ? "black": "transparent"};
  color: ${(props)=>props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
`;
const Info = styled.div`
flex: 3;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
`;

const Image = styled.img`
width: 200px;
`;
const ProductDetail = styled.div`
flex: 2;
display: flex;
`;
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
`;
const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor= styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props)=>props.color};
cursor: pointer;
`;
const ProductSize = styled.span``;
const PriceDetail = styled.span`
flex:1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;
const ProductAmount = styled.div`
font-size:24px;
margin:5px;
`;
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
`;
const Hr = styled.hr`
background-color: #eee;
height: 1.5px;
border: none;
`;

const Summary = styled.div`
flex:1;
border: 0.5px solid lightgray;
border-radius:10px;
padding: 20px;
height: 50vh;
`;

const SummaryTitle= styled.h1`
font-weight: 200;

`;

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" &&  "500"};
font-size: ${props=>props.type === "total" &&  "24px"};
//it will find for (type=total) in summary item and if there is one it will assign the values to it
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        
        <Wrapper>
            <Title>Your Cart</Title>
            <Top>
              <TopButton>CONTINUE SHOPPING</TopButton>
              <TopTexts>
                <TopText>Shopping Bag (2)</TopText>
                <TopText>Your Whislist (0)</TopText>
              </TopTexts>
              <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>

            <Bottom>
              <Info>
              <Product>

                <ProductDetail>
                  <Image src={shoes}/>
                  <Details>
                    <ProductName><b>Product:</b> JORDAN SHOES</ProductName>
                    <ProductId><b>ID:</b>8381365249</ProductId>
                    <ProductColor color="darkgreen"/>
                    <ProductSize><b>Size:</b>9</ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                    <ProductAmountContainer>
                      <Add/>
                      <ProductAmount>2</ProductAmount>
                      <Remove/>
                    </ProductAmountContainer>
                  <ProductPrice>₹ 11,998</ProductPrice>
                </PriceDetail>
               
              </Product>

<Hr />

              <Product>

<ProductDetail>
  <Image src={shoes2}/>
  <Details>
    <ProductName><b>Product:</b> NIKE SHOES</ProductName>
    <ProductId><b>ID:</b>9315435249</ProductId>
    <ProductColor color="Gray"/>
    <ProductSize><b>Size:</b>M</ProductSize>
  </Details>
</ProductDetail>
<PriceDetail>
    <ProductAmountContainer>
      <Add/>
      <ProductAmount>1</ProductAmount>
      <Remove/>
    </ProductAmountContainer>
  <ProductPrice>₹ 2,999</ProductPrice>
</PriceDetail>

</Product>

              </Info>
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>SubTotal</SummaryItemText>
                  <SummaryItemPrice>₹ 14,997</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Charges</SummaryItemText>
                  <SummaryItemPrice>₹ 50</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>-₹ 50</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type = "total">
                  <SummaryItemText >Total</SummaryItemText>
                  <SummaryItemPrice>₹ 14,997</SummaryItemPrice>
                </SummaryItem>
                <SummaryButton>CHECKOUT NOW</SummaryButton>
              </Summary>
            </Bottom>
        </Wrapper>

        <Footer/>
    </Container>
  )
}

export default Cart