import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import AboutUs from "../components/AboutUs";

function About () {
    return(
        <>
        <Navbar/>
         
      <Hero
      cName="hero-half"
      heroImg="https://plus.unsplash.com/premium_photo-1679830513876-999c0189be26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fFRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      title="About"
    
      
      
      btnClass="hide"
      
      />
       <AboutUs/>
      </>  
      
      
    )
}

export default About;