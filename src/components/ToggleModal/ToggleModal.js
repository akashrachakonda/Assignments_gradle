import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ToggleModal extends Component {
    constructor(props){
        super(props);

    
        this.state={
  
            isOpen: true,
        
            
          }


    }
    



toggle = () => {
 
    this.setState({
       
        isOpen:false
    })
   
}


render() {
  
    
  return (
    <MDBContainer>
    
     
      <MDBModal isOpen={this.state.isOpen} toggle={this.toggle} size="sm">
        <MDBModalHeader toggle={this.toggle}>Trip Type</MDBModalHeader>
  
        <MDBModalFooter>
          <MDBBtn color="primary" size="sm" onClick={this.toggle} style={{borderRadius:"25px",marginRight:"60px"}}>Business</MDBBtn>
          <MDBBtn color="primary" size="sm" onClick={this.toggle} style={{borderRadius:"25px"}}>Leisure</MDBBtn>
        </MDBModalFooter>
      </MDBModal>   
    
     
    </MDBContainer>
    );
  }
}

export default ToggleModal;