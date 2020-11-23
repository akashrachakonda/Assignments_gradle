import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import axios from 'axios';
import {Accordion,Card,Tab,Tabs} from 'react-bootstrap';


class Notification_modal extends Component {

constructor(props){
    super(props)
    this.state={
  
        notificationToggle: true,
        offerClaimed:[],
        insuranceClaimed:[]
      }
}

toggle = () => {
 
    this.setState({
       
        notificationToggle:false
    })
   
}


componentDidMount(){
  var customerId=this.props.cutomerId
  axios.get(`http://localhost:2020/offers/claim/${customerId}`)
  .then(res => {
     axios.get(`http://localhost:2020/getInsuranceClaim/${customerId}`)
     .then(res2=>{

      this.setState({
        offerClaimed:res.data,
        insuranceClaimed:res2.data
      })
     })

  });
}

render() {
  return (
    <MDBContainer>
      
      <MDBModal isOpen={this.state.notificationToggle} toggle={this.toggle} fullHeight position="right">
        <MDBModalHeader toggle={this.toggle}>Notifications...</MDBModalHeader>
        <MDBModalBody>
          



        <Tabs defaultActiveKey="Offers" id="uncontrolled-tab-example">
  <Tab eventKey="Offers" title="Claimed Offers">
   

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




  </Tab>
  <Tab eventKey="Insurance" title="Insurance Claimed">
   
  <Accordion >
        {
            this.state.insuranceClaimed.map((data,i)=>{

                return(
       <Card>
    <Accordion.Toggle as={Card.Header} eventKey={i+1}>
     <strong>Insurance Claimed :-</strong>{data.name} 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={i+1}>
                <Card.Body>

                <strong>Trip Cancellation :-</strong> <span style={{color:"green"}}> {data.tripCancellation}</span> <br/>
                <strong>Medical Coverage :-</strong> <span style={{color:"green"}}>{data.medicalCoverage}</span><br/>
                <strong>Burglary Insurance :-</strong> <span style={{color:"green"}}>{data.burglaryInsurance}</span> <br/>
                <strong>Travel Delay :-</strong> <span style={{color:"green"}}>{data.travelDelay}</span><br/>
                <strong>Accidental Death:-</strong> <span style={{color:"green"}}>{data.accidentalDeath}</span><br/>
                <strong>Insurance Purchased Price:-</strong> <span style={{color:"red"}}>{data.totalPrice}</span>
                
                
                </Card.Body>
 
   
    </Accordion.Collapse>
  </Card>
                );

            })
        
  }
  </Accordion>




  </Tab>

</Tabs>





        
        </MDBModalBody>
        </MDBModal>
     
    
    </MDBContainer>
    );
  }
}

export default Notification_modal;