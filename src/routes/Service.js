import Hero from "../components/Hero";
import Navbar from "../components/Navbar";


import Trip from "../components/Trip"


function Service () {
    return(
        <>
      
        <Navbar/>
        
      <Hero
      cName="hero-half"
      heroImg="https://images.unsplash.com/photo-1526495124232-a04e1849168c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fFRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      title="Service"
      
      
      btnClass="hide"
    
      />
      <Trip/>
    
        
      </> 
     
    );
      
}

export default Service;