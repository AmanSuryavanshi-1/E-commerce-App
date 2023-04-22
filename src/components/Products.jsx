import styled from "styled-components"
import { AllProductItems } from "../data"; // importing from data.js
import ProductHover from "./ProductHover";

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
        {AllProductItems.map((item)=>(
        <ProductHover item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products