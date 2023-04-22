import Home from "./pages/Home";
// import ProductList from "./pages/ProductList";
// import Product from "./pages/Product";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SummerSale from "./pages/SummerSale";
import SingleProduct from "./pages/SingleProduct";
import ProductList from "./pages/ProductList";
import Furniture from "./pages/Furniture";

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
        <Route path="/SingleProduct" element={<SingleProduct/>}/>
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