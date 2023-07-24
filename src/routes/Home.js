import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";




function Home () {
    return(
        <>
          <Navbar/>
          
        <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fFRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText = "Travel Plan"
        url="/"
        btnClass="show"
      
        />
        <Destination/>
       
          
        </>
    )
}


export default Home;