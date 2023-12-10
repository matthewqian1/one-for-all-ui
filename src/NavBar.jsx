import { Link, useMatch, useResolvedPath } from "react-router-dom"
import img from './images/cart.jpg'
import { useState } from "react";

export default function Navbar({cart}) {

  const [showCart, setShowCart] = useState(false);

  const toggleCart = (e) => {
    e.preventDefault();
    setShowCart(!showCart);
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
    <div className="cartTotalPrice">
    Total - ${cart.reduce((n, {price}) => n + parseFloat(price), 0)}
  </div>
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