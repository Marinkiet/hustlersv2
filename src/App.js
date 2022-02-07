import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar-component';
import HeaderComponent from './Components/Header/Header-component';
import EventsPage from './pages/Events/Events-component';
import SignIn from './Components/sign-in/sign-in-component';
function App() {
  return (
    <div >
      <Navbar/>
      <HeaderComponent/>
      <Routes>
      <Route   exact={true} path="/" element = {<HeaderComponent/>}/>
      <Route  exact={true} path="/Events" element = {<EventsPage/>}/>
      <Route  exact={true}path="/signin" element={<SignIn/>}/>

      </Routes>
   
    </div>
  );
}

export default App;
