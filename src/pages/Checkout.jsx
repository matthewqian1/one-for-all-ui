
import { useLocation} from "react-router-dom";
import Sidebar from '../Sidebar';
import Navbar from '../NavBar';

export default function Checkout() {
    const { state }  = useLocation();
    const { cart } = state;

    return <div>
        <Sidebar></Sidebar>
        <Navbar cart={cart}></Navbar>
        {cart.map((item) => {
    return <div className="cartItem">
      <img src={`data:image;base64,${item.image}`} />
      <div className="cartItemDetails">
        {item.name}
      </div>
      <div className="cartItemPrice">
        {item.price}
      </div>
    </div>
  })}
        </div>
  }