import React from 'react';
import './App.css';
import Backgrounds from './Components/Backgrounds';
import About from './Components/About';
import StructuredNav from './Components/StructuredNav';
import Pro from './Components/Pro';
import Goals from './Components/Goals';
import Cardo from './Components/Cardo';
import Footer from './Components/Footer';
import Home from './Components/Home';
import CoffeeShop from './Components/CoffeeShop';
import Contact from './Components/Contact';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

function App() {
  return (
    <>
    
    <Home/>
    <About/>
    <Goals/>
    <CoffeeShop/>
    <Contact/>
          </>
  );
}

export default App;
