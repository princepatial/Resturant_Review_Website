import React from 'react';
import { Route, Routes,Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Food from './Food';
import About from './About';
import Footer1 from './Footer1';
import Resturant from './Resturant';
import Workwithme from './Workwithme1';





function App() {
  return ( 
    <>
    <Navbar />



    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Food" element={<Food/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Resturant" element={<Resturant/>}/>
      <Route path="/Workwithme" element={<Workwithme/>}/>
    </Routes>

    <Footer1 />
    </>

  );
}

export default App;
