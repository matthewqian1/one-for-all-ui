import Navbar from "./NavBar";
import Pricing from "./pages/Pricing"
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
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<Pricing />} />
          <Route path="/home" element={<Home />}/>
        </Routes>
      </div>
      
    </>
  );
}

export default App;
