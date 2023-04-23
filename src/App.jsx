import Home from "./pages/Home";
// import Product from "./pages/Product";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SummerSale from "./pages/SummerSale";
import ProductList from "./pages/ProductList";
import Furniture from "./pages/Furniture";
import Shoes from "./pages/Shoes";
import Electronic from "./pages/Electronic";
import Product from "./pages/Product";

import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

const App = () => {
  return(
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Cart" element={<Cart/>}/>
         <Route path="/SummerSale" element={<SummerSale/>}/>     {/*summer sale */}
        <Route path="/ProductList" element={<ProductList/>}/>    {/*clearance sale */}
        <Route path="/Furniture" element={<Furniture/>}/>        {/*furniture sale */}
        <Route path="/Shoes" element={<Shoes/>}/>                {/*Shoes sale */}
        <Route path="/Electronic" element={<Electronic/>}/>      {/*Electronics sale */}
        {/* <Route path="/Product/:id" element={<Product/>}/> /:id is given along bcz it is used to give with match prop */}
        <Route path="/Product/:id" render={(routeProps) => {
  const { match } = routeProps;
  if (match && match.params && match.params.id) {
    return <Product match={match} />;
  } else {
    return <div>Product not found</div>;
  }
}} element={<Product/>}/>

        {/* render={(routeProps) => {
  const { match } = routeProps;
  if (match && match.params && match.params.id) {
    return <Product match={match} />;
  } else {
    return <div>Product not found</div>;
  }
}} */}
      </Routes>
      </BrowserRouter>
    </>
    )
    
  // <Home/>
  // <Login/>
  // <Register/>;
  // <Product/>
  // <ProductList/>;
  // <Cart/>
};

export default App;