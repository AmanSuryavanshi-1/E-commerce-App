import styled from "styled-components";

const Container = styled.div``;
const Image = styled.div``;
const Info = styled.div``;
const Title = styled.div``;
const Button = styled.div``;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src= {item.img}/>
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem