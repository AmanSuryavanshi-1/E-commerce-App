import Home from "./pages/Home";
// import ProductList from "./pages/ProductList";
// import Product from "./pages/Product";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
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