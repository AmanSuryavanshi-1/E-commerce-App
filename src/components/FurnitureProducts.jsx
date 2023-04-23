import { FurnitureItems } from "../data"; // importing from data.js
import styled from 'styled-components';
import ProductHover from "./ProductHover"; 
// using product hover ony for getting hover effect on my summer sale page items

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

const FurntiureProducts = () => {
  return (
    <Container>
        {FurnitureItems.map((item)=>(
        <ProductHover item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default FurntiureProducts