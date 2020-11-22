import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import $ from "jquery";




class Modal extends Component {

     value=""
     value2=""

 enable=()=>{
  this.value =setTimeout(()=> {
        $("#imgs").fireworks();
    });
  setTimeout(()=>{
    $("#imgs").fireworks('destroy');
    clearTimeout(this.value);
    
    },5000)
}



render() {
  return (
    <MDBContainer >
      
      
      <MDBModal isOpen={this.props.modalVisible} toggle={this.props.toggle} id="#imgs">
  <MDBModalHeader><strong>{this.props.offerCategory}</strong></MDBModalHeader>
        <MDBModalBody>
        <strong>Offer Description:-</strong>
        <span>&nbsp;&nbsp;</span>
        {this.props.offerDesc}<br/>
        <strong>Offer Valid From:-</strong> 
        <span>&nbsp;&nbsp;</span>
        {this.props.offerStartDate}<span>&nbsp;&nbsp;</span>
        <strong>To</strong><span>&nbsp;&nbsp;</span>
        {this.props.offerEndData}
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="primary" onClick={()=>{this.props.toggle("")}} style={{borderRadius:"25px",marginRight:"235px"}}>Close</MDBBtn>
          
          <MDBBtn color="primary" style={{borderRadius:"25px"}} onClick={()=>{this.enable()}}>Copy</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default Modal;