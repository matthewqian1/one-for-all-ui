
import img from './images/cart.jpg'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getCart from "./helper.jsx";
import { properties } from "./properties";

export default function Navbar() {

  var cart = getCart();
  const [cartImages, setCartImages] = useState([]);
  const [showCart, setShowCart] = useState(false);
  useEffect(() => {
    cart = getCart();
    var ids = [];
    cart.forEach(cartItem => {
      ids.push(cartItem.id);
    })

      fetch(`${properties.BASE_URL}/product/getImages?`+ new URLSearchParams({
        ids: ids
    }) , {
        method: 'GET',
        headers: { "Content-Type": "application/json"}
      })
      .then(res => res.json()) 
      .then(json => {
        setCartImages(json);
      }
    
    )
    
}, [showCart]);

  const navigate = useNavigate();

  const toggleCart = (e) => {
    e.preventDefault();
    setShowCart(!showCart);
  }

  const toCheckout = (e) => {
    e.preventDefault();
    navigate("/checkout", {state:{cart: cart}});
  }

  return <div class="topnav">
  <a class="active" href="/">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
  <div className="cart" onClick={toggleCart}>
    <button> 
      <img src={img} width={50}></img>
    </button>
  </div>
  { showCart && <div id="myModal" class="modal">

<div class="modal-content">
  <button class="close" onClick={toggleCart}>&times;</button>

  {cart.map((item, idx) => {
    return <div className="cartItem">
      <img src={`data:image;base64,${cartImages[idx]}`} />
      <div className="cartItemDetails">
        {item.name}
      </div>
      <div className="cartItemPrice">
        {item.price}
      </div>
    </div>
  })}
    <div className="cartTotalPrice">
    Total - ${cart.reduce((n, {price}) => n + parseFloat(price), 0)}
  </div>
  <br/>
  <br/>
  <button onClick={toCheckout}>Proceed to checkout</button>
</div>

</div>}
  
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit">Submit</button>
    </form>
  </div>

</div>
}