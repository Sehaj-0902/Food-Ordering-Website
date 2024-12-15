import React from 'react';
import {Link} from 'react-router-dom';
import BannerImg from '../assets/pizza.jpeg';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${BannerImg})` }}>
      <div className="headerContainer" >
        <h1>Pizzeria</h1>
        <p> PIZZA TO FILL YOUR MIND AND SOUL !</p>
        <Link to="/menu">
        <button > ORDER NOW </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
