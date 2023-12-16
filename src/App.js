import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home cart={[]}/>} />
          <Route path="/listing" element={<Listing />}/>
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
      </div>
      
    </>
  );
}

export default App;
