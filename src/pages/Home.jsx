
import ItemCard from "../ItemCard";
import Navbar from "../NavBar";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8];

    const navigate = useNavigate();

    const addProduct = (event) => {
        event.preventDefault();
        navigate("/addProduct");
      }

    return <div>
        <Sidebar></Sidebar>
        <Navbar></Navbar>
        <div className="itemCardArray">
            {items.map(() => (
                <ItemCard/>
            ))}
        </div>
        <button onClick={addProduct}>Add product</button>
        </div>
  }