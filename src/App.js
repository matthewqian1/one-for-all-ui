import Navbar from "./NavBar";
import AddProduct from "./pages/AddProduct"
import { Route, Routes } from "react-router-dom"
import ImageUpload from "./ImageUpload";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/about" element={<AddProduct />} />
          <Route path="/home" element={<Home />}/>
        </Routes>
      </div>
      
    </>
  );
}

export default App;
