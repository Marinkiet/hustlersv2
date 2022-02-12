import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar-component';
import HeaderComponent from './Components/Header/Header-component';
import EventsPage from './pages/Events/Events-component';
import SignIn from './pages/sign-in/sign-in-component';
import Searchbar from './Components/Search/Search-component';
import { auth } from './firebase/firebase.utils';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser:null
    }
  }
  unsubscibeFromAuth = null;

  componentDidMount(){
    auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);

    })
  }
  componentWillUnmount(){
    this.unsubscibeFromAuth();
  }
  render(){

  return (
    <div>
      <Navbar
      currentUser = {this.state.currentUser}/>      
      
      <Routes>
      <Route   exact={true} path="/" element = {<HeaderComponent/>}/>
      <Route  exact={true} path="/Events" element = {<EventsPage/>}/>
      <Route exact path="Signin" element={<SignIn/>}/>

      </Routes>
   
    </div>
  );
}
}

export default App;
