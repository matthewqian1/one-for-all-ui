
import ItemCard from "../ItemCard";
import Navbar from "../NavBar";
import { useState, useEffect } from "react";
import { properties } from "../properties";
import background from '../images/simpsons.jpg'
import gorilla from '../images/gorilla.jpg'
import koala from '../images/koala.jpg'
import ChatBot from "../ChatBot";

export default function Home() {

    return <div className="home">
        <ChatBot></ChatBot>
        <Navbar></Navbar>
        <div className="homeLeftIcon">
            <img src={gorilla}>
            </img>
        </div>
        <div className="homeRightIcon">
            <img src={koala}>
            </img>
        </div>
        <h1>One for All</h1>
        <h2>The one stop fashion shop for all</h2>
        <button class="glow-on-hover" type="button">SHOP NOW</button>
        <div className="homeBackground">
            <img src={background}>
            </img>
        </div>
        </div>
  }