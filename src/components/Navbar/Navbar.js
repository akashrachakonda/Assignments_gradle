import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView,MDBIcon,MDBTooltip } from 'mdbreact';

import Offers from '../Offers_zone/Offers';
import Toggle from '../Toggle/Toggle'
import ToggleModal from '../ToggleModal/ToggleModal'

import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Notification_modal from '../Notification_modal/Notification_modal';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  

  render() {
    return (
      <div>
    
     
            <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>

              <NavLink to="/">
              <MDBNavbarBrand  style={{padding:"0px",margin:"0px"}}>
               <img src="Logo1.png" style={{height:"80px",width:"80px"}}/>
              </MDBNavbarBrand>
              </NavLink>



              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar style={{paddingLeft:"20px"}}>


               

                  <MDBNavbarNav right>


                  <MDBNavItem style={{color:"white",paddingTop:"7px",paddingRight:"30px"}}>

                    <Toggle  switchToggle={this.props.switchToggle} handleSwitchChange={this.props.handleSwitchChange}/>
                  </MDBNavItem>


                  <NavLink to="#">
                  <MDBNavItem >
                  
              
                  <MDBIcon far icon="bell" style={{color:"white",paddingTop:"10px",paddingRight:"30px"}} title="Notifications"
                   onClick={this.props.handleNotificationChange}/>
                  
                
                  </MDBNavItem>
                  </NavLink>
               
                  <NavLink to="/profile">

                  <MDBNavItem >
                  <MDBIcon far icon="user-circle"  style={{color:"white",paddingTop:"10px",paddingRight:"20px"}} title="User Profile" />
                  </MDBNavItem>

                  </NavLink>





                  <MDBNavItem >
                    <MDBNavLink to="#">Logout</MDBNavLink>
                  </MDBNavItem>


                  
                  {/* <MDBNavItem >
                  <MDBNavLink to="/login"> Login</MDBNavLink>
                  </MDBNavItem> */}
                

                  </MDBNavbarNav>



               
              </MDBCollapse>
            </MDBNavbar>

            {this.props.switchToggle && <ToggleModal />}
            {this.props.notificationToggle && <Notification_modal/>}
            
          
      </div>
    );
  }
}

export default Navbar;