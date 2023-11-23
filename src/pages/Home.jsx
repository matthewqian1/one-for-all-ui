
import ItemCard from "../ItemCard";
import Navbar from "../NavBar";

export default function Home() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8];

    return <div>
        <Navbar></Navbar>
        <div className="itemCardArray">
            {items.map(() => (
                <ItemCard/>
            ))}
        </div>
        </div>
  }