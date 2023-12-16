

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
        <Navbar cart={cart}></Navbar>
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
        </div>
  }