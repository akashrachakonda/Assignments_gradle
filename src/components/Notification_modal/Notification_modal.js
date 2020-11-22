import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class Notification_modal extends Component {

constructor(props){
    super(props)
    this.state={
  
        notificationToggle: true
      }
}

toggle = () => {
 
    this.setState({
       
        notificationToggle:false
    })
   
}


render() {
  return (
    <MDBContainer>
      
      <MDBModal isOpen={this.state.notificationToggle} toggle={this.toggle} fullHeight position="right">
        <MDBModalHeader toggle={this.toggle}>Notifications...</MDBModalHeader>
        <MDBModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </MDBModalBody>
        </MDBModal>
     
    
    </MDBContainer>
    );
  }
}

export default Notification_modal;