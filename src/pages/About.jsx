
import ItemCard from "../ItemCard";
import Navbar from "../NavBar";
import { useNavigate } from "react-router-dom";
import background from '../images/simpsons.jpg'
import gorilla from '../images/gorilla.jpg'
import koala from '../images/koala.jpg'
import ChatBot from "../ChatBot";

export default function About() {


    return <div>
        <ChatBot></ChatBot>
        <Navbar></Navbar>
        <div className="about">
        <h1>About Us</h1>
        <p>Welcome to My E-Commerce Store, your one-stop destination for all your shopping needs. We aim to provide you with a seamless and enjoyable online shopping experience.</p>

        <p>At My E-Commerce Store, we believe in offering high-quality products at affordable prices. Our diverse range of products caters to various interests and preferences, ensuring there's something for everyone.</p>

        <p>Why choose us?</p>
        <ul>
            <li>Wide Selection: Explore a vast collection of products, from trendy fashion to cutting-edge electronics.</li>
            <li>Quality Assurance: We are committed to delivering products that meet the highest standards of quality and durability.</li>
            <li>Secure Shopping: Your security is our priority. Shop with confidence knowing that your personal information is safe with us.</li>
            <li>Excellent Customer Service: Our dedicated support team is here to assist you with any queries or concerns you may have.</li>
        </ul>

        <p>Thank you for choosing My E-Commerce Store. Happy shopping!</p>
        </div>
        </div>
  }