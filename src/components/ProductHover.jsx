import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components"
import { NavLink } from "react-router-dom";

const Info = styled.div`
opacity: 0;
/* opacity is set to zero now if we hover on it the gray color with icon will appear  */
/* all the properites below are hidden for now until we set opacity to 1  */
width: 100%;
height: 100%;
position: absolute;
top:0;
left: 0;
background-color: rgba(0,0,0,0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.7s ease;
cursor: pointer;
`;

const Container = styled.div`
flex:1;
margin:5px;
min-width:300px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd ;
position: relative;

&:hover ${Info}{
    opacity: 1;  
     /* opacity is set to 1 now if we hover on it the gray color with icon will appear   */


}
`;

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`;

const Image = styled.img`
height: 70%;
z-index: 2; 
/* object-fit:cover ; */
//z index is used to create circle effect to put it behind the image we used z-index:2
`;

const Icon= styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin:10px;
transition: all 0.5s ease;
cursor: pointer;

/* this will make icon bigger by the scale of 1.1 when user hover through it  */
&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}
`;
        
const Product = ({item}) => { // defining {} prop here taken from products.jsx
  return (
    <NavLink to={`/product/${item.id}`} style={{ color: "black" }}>

    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>

        </Container>
        </NavLink>
  )
}

export default Product