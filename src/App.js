import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar-component';
import HeaderComponent from './Components/Header/Header-component';
import ItemSectionsComponent from './Components/ItemSection/Item-Sections-Component';
import FooterComponent from './Components/Footer/Footer-component';
import EventsPage from './pages/Events/Events-component';
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <HeaderComponent/>
      <Routes>
      <Route   path="/" element = {<HeaderComponent/>}/>
      <Route  exact path="/Events" element = {<EventsPage/>}/>
   </Routes>
   
    {/* 
      <ItemSectionsComponent/>
    <FooterComponent/>*/}
    </div>
  );
}

export default App;
