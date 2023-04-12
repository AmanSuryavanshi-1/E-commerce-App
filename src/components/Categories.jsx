import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'


const Container = styled.div`
display: flex;
`;

const Categories = () => {
  return (
    <Container> 
        {categories.map(item=>(
          // so i can map through my array and for each item i am gonna call my category item component
            <CategoryItem item={item}/>
            //so ass prop i will give my item
            // so i can take this prop in categoryItem.jsx and can use it inside my container

        ))}
    </Container>
  )
}

export default Categories