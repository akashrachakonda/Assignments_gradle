import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView,MDBBtn } from 'mdbreact';
import { BrowserRouter as Router,Switch,Route ,Redirect} from 'react-router-dom';
import Offers from './components/Offers_zone/Offers';

import Navbar from './components/Navbar/Navbar';
import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import { Container } from 'react-bootstrap';

import ToggleModal from  './components/ToggleModal/ToggleModal';
import Profile_Main from './components/Profile/Profile_Main';
import LoginComponent from './components/Login/LoginComponent';

import Home from './Home'
import MainLoader from './MainLoader';
import axios from 'axios';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      switch1: false,
      switchToggle: false,
      notificationToggle:false,
      isLoading:true,
      isAuthenticated:false,
      customerId:""
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

   componentDidMount(){


    var customerId=localStorage.getItem("customerId");
    if(!customerId){
      this.setState({
        isLoading:false
      });
    }
    else{
      axios.get(`http://localhost:2020//authenticate/${customerId}`).
      then(res=>{
        if(res.data){
          this.setState({
            isAuthenticated:true,
         customerId:customerId,
         isLoading:false
          })
        }
        else{
          this.setState({
            isLoading:false
          })
         
        }
      })
    }


   }


authenticate=(customerId1)=>{

  localStorage.setItem("customerId",customerId1)

  this.setState({
    isAuthenticated:true,
    customerId:customerId1,
    
  });
}

unauthenticate=()=>{
  this.setState({
    isAuthenticated:false,
    customerId:""
  })
  localStorage.removeItem("customerId")
}


  render() {

    console.log(this.state.customerId+"------------------")
    return (
      
      <div>
        {this.state.isLoading? <MainLoader/>:
        <div>
        <Router>
  
       
          
              <Navbar switchToggle={this.state.switchToggle} handleSwitchChange={this.handleSwitchChange} 
              notificationToggle={this.state.notificationToggle}
              handleNotificationChange={this.handleNotificationChange} 
              isAuthenticated={this.state.isAuthenticated} 
              customerId={this.state.customerId}
              unauthenticate={this.unauthenticate}
              />
  
              <Switch>
                
              <Route exact path='/login' component={()=>{
                return (!this.state.isAuthenticated ?<LoginComponent authenticate={this.authenticate}/> :  <Redirect to="/"/>)}}/>

              <Route exact path='/profile' component={()=>{ 
                return (this.state.isAuthenticated ? <Profile_Main
                 customerId={this.state.customerId}/>:<Redirect to="/login" /> )}}/>

              <Route exact path='/' component={()=>{ 
                return (this.state.isAuthenticated ? <Home
                 switchToggle={this.state.switchToggle}  customerId={this.state.customerId}/>
                 :<Redirect to="/login" /> )}} />
  
              </Switch>
              
            
  
            
              {/* <Home switchToggle={this.state.switchToggle}/> */}
            </Router>
  
        </div>
      }
</div>


      
    );
  }
}

export default App;