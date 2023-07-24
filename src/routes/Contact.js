import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ab4 from "../Images/contact.jpg"
import ContactForm from "../components/ContactForm";

function Contact () {
    return(
        <>
        <Navbar/>
        
      <Hero
      cName="hero-half"
      heroImg={ab4}
      title="Contact"
      
      
      btnClass="hide"
    
      />
      <ContactForm/>    
      </> 
    )
}

export default Contact;