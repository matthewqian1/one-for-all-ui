import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from '../Sidebar';
import { Nav } from 'react-bootstrap';
import Navbar from '../NavBar';
import { useEffect } from 'react';
import { properties } from "../properties";

export default function Listing() {
    const { state }  = useLocation();
    const { cart, id } = state;
    
    const [myCart, setMyCart] = useState(cart);
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0.0);
    let sizes = ['S', 'M', 'L'];

    const addToCart = (e) => {
        e.preventDefault();
        const newCart = myCart.concat({image, name, id, price});
        setMyCart(newCart);
    }

    useEffect(() => {
        fetch(`${properties.BASE_URL}/product/get/${id}` , {
            method: 'GET',
            headers: { "Content-Type": "application/json"}
          })
          .then(res => res.json()) 
          .then(json => {
            console.log(json);
            setImage(json.image);
            setName(json.name);
            setDescription(json.description);
            setPrice(json.price);
          })
    }, []);

    const [size, setSize] = useState('S');
    return <div>
        <Sidebar></Sidebar>
        <Navbar cart={myCart}></Navbar>
        <div className='listing'>
        <div style={{padding: "5%"}}>
        <img src={`data:image;base64,${image}`} />
        </div>
        
        <selection>
            <h1>{name}</h1>
            <h2>{description}</h2>
            <h3>${price}</h3>
            <p>size : {size}</p>
            {sizes.map((size) => {
                return <button className='button sizeButton' value={size} onClick={(e) => setSize(e.target.value)}>{size}</button>
            })}
            <br></br>
            <button className='button addToCartButton' onClick={addToCart}>Add To Cart</button>
        </selection>

    </div>
    </div>
    
  }