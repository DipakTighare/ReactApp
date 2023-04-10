import React from 'react';
import { NavLink } from 'react-router-dom';
import elect2 from '../images/greenpng.png';
import Common from './Common';


const About = () => {
  return (
<>
<section className="container">
    <Common 
title1="What is Electric Vehicle" 
        title2="EVs"
        para="An EV is a shortened acronym for an Electric vehicle
              EVs are vehicles that are either partially or fully powered on electric power.
              Electric vehicles have low running costs as they have less moving 
              parts for maintaining and also very environmentally friendly as they 
              use little or no fossil fuels (petrol or diesel)"
        img={elect2}
         btn=<NavLink to = "/about/Tycard" className='kbtn'>Know more</NavLink>  

    />
</section>
</>
  )
}

export default About