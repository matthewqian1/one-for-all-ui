
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

      fetch(`${properties.PRODUCT_URL}/product/getImages?`+ new URLSearchParams({
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

  const totalCost = cart.reduce((n, {price}) => n + parseFloat(price), 0);

  return <div class="topnav">
  <a class="active" href="/">Home</a>
  <a class="active" href="/">About</a>
  <a class="active" href="/">Store</a>
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
        {item.name} <br/>
      </div>
      <div className="cartItemPrice">
        ${item.price}
      </div>
    </div>
  })}
    <div className="cartTotalPrice">
    <header>Subtotal:</header>
    <value>${totalCost}</value>
    <br/>
    <header>Total Discount:</header>
    <value>- ${0.2 * totalCost}</value>
    <br/>
    <header>Order Total:</header>
    <value>${0.8 * totalCost}</value>
  </div>
  <br/>
  <br/>
  <button className='button checkoutProceedButton' onClick={toCheckout}>Proceed to checkout</button>
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