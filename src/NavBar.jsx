import { Link, useMatch, useResolvedPath } from "react-router-dom"
import img from './images/cart.jpg'
import Cart from "./Cart";
import { useState } from "react";

export default function Navbar({cart}) {

  const [showCart, setShowCart] = useState(false);

  const toggleCart = (e) => {
    e.preventDefault();
    setShowCart(!showCart);
  }

  return <div class="topnav">
  <a class="active" href="/home">Home</a>
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
  {cart.map(() => {
    return <li>item</li>
  })}
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