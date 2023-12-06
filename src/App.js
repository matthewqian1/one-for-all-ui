import AddProduct from "./pages/AddProduct"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login";
import Home from "./pages/Home";
import Listing from "./pages/Listing";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/about" element={<AddProduct />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/listing" element={<Listing />}/>
        </Routes>
      </div>
      
    </>
  );
}

export default App;
