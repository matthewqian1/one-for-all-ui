
import ItemCard from "../ItemCard";
import Navbar from "../NavBar";
import { useState, useEffect } from "react";
import { properties } from "../properties";
import ChatBot from "../ChatBot";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [priceFilter, setPriceFilter] = useState(0);
    const [allCategories, setAllCategories] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState(new Set());
    const [allColours, setAllColours] = useState([]);
    const [colourFilter, setColourFilter] = useState(new Set());

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

        fetch(`${properties.BASE_URL}/product/getCategories` , {
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
              setAllCategories(list);
          })

        fetch(`${properties.BASE_URL}/product/getColours` , {
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
            setAllColours(list);
        })
      }
    , []);

    const addPriceFilter = (e) => {
        setPriceFilter(e.target.value);
    }

    const editCategoryFilter = (e) => {
        if (e.target.checked) {
            setCategoryFilter(new Set([...categoryFilter, e.target.value]));
        } else {
            setCategoryFilter(new Set([...categoryFilter].filter(x => x !== e.target.value)))
        }
    }

    const editColourFilter = (e) => {
        if (e.target.checked) {
            setColourFilter(new Set([...colourFilter, e.target.value]));
        } else {
            setColourFilter(new Set([...colourFilter].filter(x => x !== e.target.value)))
        }
    }

    return <div>
        <ChatBot></ChatBot>
        <Navbar></Navbar>
        <div className="itemsPage">
            <div className="filterBar">
                <div className="filter">
                    <h1>Price</h1>
                    <form onChange={addPriceFilter}>
                        <input type="radio" name="price" value={0}/>
                        <label> Any</label><br/>
                        <input type="radio" name="price" value={50}/>
                        <label> $50 and under</label><br/>
                        <input type="radio" name="price" value={100}/>
                        <label> $100 and under</label><br/>
                        <input type="radio" name="price" value={150}/>
                        <label> $150 and under</label><br/>
                    </form>
                </div>
                <div className="filter">
                    <h1>Category</h1>
                    <form onChange={editCategoryFilter}>
                        {allCategories.map
                            ((category) => {
                                return <>
                                <input type="checkbox" value={category}/>
                                <label> {category}s</label><br/>
                                </>
                                }
                            )
                        }
                    </form>
                </div>
                <div className="filter">
                    <h1>Colour</h1>
                    <form onChange={editColourFilter}>
                        {allColours.map
                            ((colour) => {
                                return <>
                                <input type="checkbox" value={colour}/>
                                <label> {colour}</label><br/>
                                </>
                                }
                            )
                        }
                    </form>
                </div>
            </div>
            <div className="itemCardArray">
                {products
                .filter(product => parseInt(priceFilter) === 0 || product.price <= parseInt(priceFilter))
                .filter(product => categoryFilter.size === 0 || categoryFilter.has(product.category))
                .filter(product => colourFilter.size === 0 || colourFilter.has(product.colour))
                .map((product) => 
                    (
                    <ItemCard key={product.id} data={{
                        image: product.image, 
                        description: product.description, 
                        name: product.name, 
                        id: product.id, 
                        price: product.price,
                        rating: product.averageRating
                    }}/>
                ))}
            </div>
        </div>
        </div>
  }