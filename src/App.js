import Navbar from "./NavBar";
import Pricing from "./pages/Pricing"
import { Route, Routes } from "react-router-dom"

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
    </>
  );
}

export default App;
