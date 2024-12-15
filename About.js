import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';
function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{backgroundImage: `url(${MultiplePizzas })` }}>

      </div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
        In the heart of the bustling city, a mouthwatering aroma wafts through the air, heralding the
         grand opening of "Pizzeria Paradiso." Nestled in a quaint corner, this new pizza cafe is more than just a haven for pizza enthusiasts; it's a culinary journey waiting to unfold. The story behind Pizzeria Paradiso is as intriguing as its name suggests. Owned by a passionate chef with a mysterious past, the cafe is said to feature a secret ingredient that adds an enchanting twist to every slice. Rumors swirl about 
        the chef's globetrotting adventures in search of the perfect pizza recipe, and customers eagerly anticipate discovering the hidden gem within each bite. As the doors swing open, revealing a cozy and inviting interior adorned with vintage pizza memorabilia, the city finds itself captivated by the enigma of Pizzeria Paradiso, where every slice tells a tale, and every customer becomes a part of the unfolding narrative of flavor and delight.
        </p>
        
      </div>
    </div>
  )
}

export default About
