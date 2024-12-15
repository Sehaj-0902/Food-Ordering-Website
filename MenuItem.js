import React from 'react'
import '../styles/Menu.css'

const MenuItem = ({image, name, price}) => {
  return (
    <>
    <div className='menuItem'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1> {name} </h1>
        <p> &#x20b9;{price} </p>
        <button type='submit' id='btn'>Add to Cart</button>
    </div>
    </>
  )
}

export default MenuItem