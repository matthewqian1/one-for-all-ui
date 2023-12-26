import React, { useState } from 'react';
import { useLocation} from "react-router-dom";
import Sidebar from '../Sidebar';
import Navbar from '../NavBar';
import { useEffect } from 'react';
import { properties } from "../properties";
import getCart from '../helper';
import Review from '../Review';

export default function Listing() {
    const { state }  = useLocation();
    const { id } = state;
    
    const myCart = getCart();
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0.0);
    const [reviews, setReviews] = useState([]);
    let sizes = ['S', 'M', 'L', 'XL', 'XXL'];

    const addToCart = (e) => {
        e.preventDefault();
        const newCart = myCart.concat({name, id, price});
        window.sessionStorage.setItem("cart", JSON.stringify(newCart));
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
            setReviews(json.reviews);
          })
    }, []);

    const [size, setSize] = useState('S');
    return <div>
            <Sidebar></Sidebar>
            <Navbar cart={myCart}></Navbar>
        <div className='listing'>
        <div>
        <img src={`data:image;base64,${image}`} />
        <hr></hr>
        <content>
            <h1>Description</h1>
            <p>{description}</p>
        </content>
        <hr></hr>
        <content>
            <h1>Shipping + Returns</h1>
            <li>Free shipping within Australia on all orders of $100 or more</li>
            <li>Simple and easy returns.</li>
            <li>We do not offer exchanges, only refunds</li>
            <li>Visit our customer service page for more information or contact our customer service team for further questions.</li>
        </content>
        <hr></hr>
        <content>
            <h1>Reviews</h1>
            {reviews.map((review) => {
                return <Review data = {{
                    review: review
                }}/>
            })}
        </content>
            </div>
                <selection>
                    <h1>{name}</h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3>${price}</h3>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>size : {size}</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    {sizes.map((size) => {
                        return <button className='button sizeButton' value={size} onClick={(e) => setSize(e.target.value)}>{size}</button>
                    })}
                    <br></br>
                    <button className='button addToCartButton' onClick={addToCart}>Add To Cart</button>
                </selection>

            </div>
    </div>
    
  }