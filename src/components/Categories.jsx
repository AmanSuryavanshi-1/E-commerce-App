import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'


const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container> 
        {categories.map(item=>(
          // so i can map through my array and for each item i am gonna call my category item component
            <CategoryItem item={item} key={item.id}/>
            //it is compulsory to give id so that the data can be differentiated easily
            //so ass prop i will give my item
            // so i can take this prop in categoryItem.jsx and can use it inside my container

        ))}
    </Container>
  )
}

export default Categories