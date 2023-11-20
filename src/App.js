import Navbar from "./NavBar";
import Pricing from "./pages/Pricing"
import { Route, Routes } from "react-router-dom"
import ImageUpload from "./ImageUpload";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Pricing />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<Pricing />} />
        </Routes>
      </div>
      <div>
      <h1>base64 string image</h1>
      <hr />
      <ImageUpload />
    </div>
      
    </>
  );
}

export default App;
