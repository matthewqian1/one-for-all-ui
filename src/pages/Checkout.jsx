

import React, { useState } from 'react';
import Navbar from '../NavBar';
import { useEffect } from 'react';
import { properties } from "../properties";
import getCart from '../helper';

export default function Checkout() {
    var cart = getCart();
    const [cartImages, setCartImages] = useState([]);
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
      
  });

  const totalCost = cart.reduce((n, {price}) => n + parseFloat(price), 0);

    return <div>
        <Navbar></Navbar>
        <div className='orderPage'>
          <form className='orderForm'>
            <h1>1. Your Email Address</h1>
            <label>Email Address *</label><br/>
            <input type="text" required='true' value={'random@gmail.com'}/><br/>
            <hr></hr>

            <h1>2. Delivery Details</h1>
            <label>First Name *</label><br/>
            <input type="text" required='true' value={'John'}/><br/>
            <label>Last Name *</label><br/>
            <input type="text" required='true' value={'Doe'}/><br/>
            <label>Country *</label><br/>
            <input type="text" required='true' value={'Australia'}/><br/>

            <label>Delivery Address *</label><br/>
            <input type="text" required='true' value={'123 Kangaroo Rd'}/><br/>
            <label>Phone Number *</label><br/>
            <input type="text" required='true' value={'+61 123 123 123'}/><br/>
            <hr></hr>

            <h1>1. Payment Details</h1>
            <label>Card Holder Name *</label><br/>
            <input type="text" required='true' value={'John Doe'}/><br/>
            <label>Card Number *</label><br/>
            <input type="text" required='true' value={'1234 1234 1234 1234'}/><br/>
            <label>Expiry Date *</label><br/>
            <input type="month" style={{width: '150px'}} required='true' value="2028-07"/><br/>
            <label>Security Code *</label><br/>
            <input type="text" style={{width: '80px'}} required='true' value={123}/><br/>
            <hr></hr>
            <input type="submit" value="Place Order"/>
          </form>
          <div className='orderSummary'>
            {cart.map((item, idx) => {
              return <div className="cartItem">
                        <img src={`data:image;base64,${cartImages[idx]}`} />
                        <div className="cartItemDetails">
                          {item.name}
                        </div>
                        <div className="cartItemPrice">
                          ${item.price}
                        </div>
                      </div>
                      }
                      )
            }
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
          </div>
        </div>
      </div>
  }