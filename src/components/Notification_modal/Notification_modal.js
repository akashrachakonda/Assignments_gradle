import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import axios from 'axios';
import {Accordion,Card} from 'react-bootstrap';


class Notification_modal extends Component {

constructor(props){
    super(props)
    this.state={
  
        notificationToggle: true,
        offerClaimed:[]
      }
}

toggle = () => {
 
    this.setState({
       
        notificationToggle:false
    })
   
}


componentDidMount(){
  var customerId="123"
  axios.get(`http://localhost:2020/offers/claim/${customerId}`)
  .then(res => {
    this.setState({
      offerClaimed:res.data
    });

  });
}

render() {
  return (
    <MDBContainer>
      
      <MDBModal isOpen={this.state.notificationToggle} toggle={this.toggle} fullHeight position="right">
        <MDBModalHeader toggle={this.toggle}>Notifications...</MDBModalHeader>
        <MDBModalBody>
          

        <Accordion >
        {
            this.state.offerClaimed.map((data,i)=>{

                return(
       <Card>
    <Accordion.Toggle as={Card.Header} eventKey={i+1}>
     <strong>Your's Claimed Offer :-</strong>{data.offerCategory} 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={i+1}>
                <Card.Body>
                <strong>Offer Description:-</strong>  {data.offerDescription}<br/>
                <strong>Offer Coupon Code:-</strong> <span style={{color:"green"}}>{data.couponCode}</span><br/>
                <strong>Offer Expiry Date:-</strong> <span style={{color:"red"}}>{data.endDate}</span></Card.Body>
    </Accordion.Collapse>
  </Card>
                );

            })
        
  }
  </Accordion>
        </MDBModalBody>
        </MDBModal>
     
    
    </MDBContainer>
    );
  }
}

export default Notification_modal;