import { Container } from '@material-ui/core'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <Container> 
        {categories.map(item=>(
            <CategoryItem/>
        ))}
    </Container>
  )
}

export default Categories