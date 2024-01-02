import { Route, Routes } from "react-router-dom"
import Store from "./pages/Store";
import Listing from "./pages/Listing";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/listing" element={<Listing />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/store" element={<Store/>} />
        </Routes>
      </div>
      
    </>
  );
}

export default App;
