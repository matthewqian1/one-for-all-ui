
import ItemCard from "../ItemCard";
import Navbar from "../NavBar";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { properties } from "../properties";

export default function Home({cart}) {
    console.log(cart);
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

    const navigate = useNavigate();

    const addProduct = (event) => {
        event.preventDefault();
        navigate("/addProduct");
    }

    return <div>
        <Sidebar></Sidebar>
        <Navbar cart={cart}></Navbar>
        <div className="itemCardArray">
            {products.map((product) => (
                <ItemCard data={{image: product.image, description: product.description, name: product.name, cart: cart}}/>
            ))}
        </div>
        <button onClick={addProduct}>Add product</button>
        </div>
  }