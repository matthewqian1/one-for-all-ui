
import ItemCard from "../ItemCard";
import Navbar from "../NavBar";
import Sidebar from "../Sidebar";

export default function Home() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8];

    return <div>
        <Sidebar></Sidebar>
        <Navbar></Navbar>
        <div className="itemCardArray">
            {items.map(() => (
                <ItemCard/>
            ))}
        </div>
        </div>
  }