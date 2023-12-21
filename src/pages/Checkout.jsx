

import React, { useState } from 'react';
import Sidebar from '../Sidebar';
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
    return <div>
        <Sidebar></Sidebar>
        <Navbar></Navbar>
        <div className='orderPage'>
          <div className='orderForm'>
            <h1>1. Your Email Address</h1>
            <label>Email Address *</label><br/>
            <input type="text"/><br/>
            <hr></hr>

            <h1>2. Delivery Details</h1>
            <label>First Name *</label><br/>
            <input type="text"/><br/>
            <label>Last Name *</label><br/>
            <input type="text"/><br/>
            <label>Country *</label><br/>
            <input type="text"/><br/>

            <label>Delivery Address *</label><br/>
            <input type="text"/><br/>
            <label>Phone Number *</label><br/>
            <input type="text"/><br/>
            <hr></hr>

            <h1>1. Payment Details</h1>
            <label>Email Address *</label><br/>
            <input type="text"/><br/>
          </div>
          <div className='orderSummary'>
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
                      }
                      )
            }
          </div>
        </div>
      </div>
  }