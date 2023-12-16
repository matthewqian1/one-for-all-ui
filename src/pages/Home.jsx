
import ItemCard from "../ItemCard";
import Navbar from "../NavBar";
import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";
import { properties } from "../properties";

export default function Home({cart}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${properties.BASE_URL}/product/all` , {
          method: 'GET',
          headers: { "Content-Type": "application/json"}
        })
        .then(res => res.json()) 
        .then(json => {
            let list = [];
            for(let i = 0; i < json.length; i++) {
                let obj = json[i];
            
                list.push(obj);
            }
            setProducts(list);
            console.log(list);
        })
      }
    , []);

    return <div>
        <Sidebar></Sidebar>
        <Navbar cart={cart}></Navbar>
        <div className="itemCardArray">
            {products.map((product) => (
                <ItemCard data={{image: product.image, description: product.description, name: product.name, cart: cart, id: product.id, price: product.price}}/>
            ))}
        </div>
        </div>
  }