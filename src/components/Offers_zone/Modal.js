import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,MDBLink ,MDBIcon} from 'mdbreact';
import axios from 'axios';

import $ from "jquery";




class Modal extends Component {

    state={
      isOpen:true,
      isCopied:false,
      closeMargin:"170px"
    }

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

toggle=()=>{
  this.setState({
    isOpen:false
  })
}

addOffersClaimed=()=>{
  const options={
  customerId:"123",
  couponCode:this.props.couponCode,
  offerCategory:this.props.offerCategory,
  offerDescription:this.props.offerDesc,
  endDate:this.props.offerEndData,
  }

  const header={
    headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json'
    }
  }

  axios.post(`http://localhost:2020/offersAdd`,JSON.stringify(options),header)
  .then(res => {
    this.enable();
    console.log("Saved...");

    this.setState({
      isCopied:true,
      closeMargin:"80px"
    });

  })
  .catch(
   (err)=>{
     console.log(err);
   }
  );




}

render() {
  return (
    <MDBContainer >
      
      
      <MDBModal isOpen={this.state.isOpen} toggle={this.props.toggle} id="#imgs">
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
          <MDBBtn color="primary" onClick={()=>{this.props.toggle()}} style={{borderRadius:"25px",marginRight:this.state.closeMargin}}>Close</MDBBtn>

          {this.state.isCopied && 
          <strong><span style={{color:"green"}}>Copied!<MDBIcon icon="thumbs-up" className="ml-2" /></span></strong>
          }
         <span style={{borderColor:"green",borderStyle:"solid",padding:"5px",borderRadius:"15px"}}><strong> {this.props.couponCode}</strong></span>
          <MDBBtn color="primary" style={{borderRadius:"25px"}} onClick={()=>{this.addOffersClaimed()}}>Copy</MDBBtn>
       
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default Modal;