import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView,MDBBtn } from 'mdbreact';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Offers from './components/Offers_zone/Offers';

import Navbar from './components/Navbar/Navbar';
import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import { Container } from 'react-bootstrap';

import ToggleModal from  './components/ToggleModal/ToggleModal';
import Profile_Main from './components/Profile/Profile_Main';
import LoginComponent from './components/Login/LoginComponent';

import Home from './Home'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      switch1: false,
      switchToggle: false,
      notificationToggle:false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }



  handleSwitchChange  = () => {
   // let switchNumber = `switch${nr}`;
    this.setState({
      switchToggle: !this.state.switchToggle
    });
  }

  handleNotificationChange  = () => {
    // let switchNumber = `switch${nr}`;
     this.setState({
      notificationToggle: !this.state.notificationToggle
     });
   }







  render() {
    return (
      <div>
      <Router>

     
        
            <Navbar switchToggle={this.state.switchToggle} handleSwitchChange={this.handleSwitchChange} 
            notificationToggle={this.state.notificationToggle}
            handleNotificationChange={this.handleNotificationChange} />

            <Switch>
            <Route exact path='/login' component={LoginComponent}/>
            <Route exact path='/profile' component={Profile_Main}/>
            <Route exact path='/' component={()=>{ return <Home  
            switchToggle={this.state.switchToggle}/> }} />

            </Switch>
            
          

          

          </Router>

      </div>
    );
  }
}

export default App;