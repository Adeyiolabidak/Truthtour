import React, {Component} from 'react';
import './App.css';
import {Route, Routes } from "react-router-dom";

import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import SignUp from './routes/SignUp';
import Footer from './components/Footer';



class App extends Component {
    render() {
      return (
      <div className="App">
        
        <Routes>
          <Route path = "/" element ={<Home/>}/>
          <Route path = "/about" element ={<About/>}/>
          <Route path = "/service" element ={<Service/>}/>
          <Route path = "/contact" element ={<Contact/>}/>
          <Route path = "/signup" element ={<SignUp/>}/>
          

        </Routes>
        
       <Footer/>
         
        
      </div>
    );
}
}

export default App;