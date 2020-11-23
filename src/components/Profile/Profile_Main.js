import React, { Component } from 'react'
import Profile from './Profile';
import Transaction from './Transaction'
import Accounts from './Accounts';
import ClaimedOffers from './ClaimedOffers';
import {Row,Col,Nav,Tab,Container} from 'react-bootstrap'

import axios from 'axios';
export default class Profile_Main extends Component {

constructor(props){
  super(props)

  this.state={
    Transactions:[],
    customerId:"",
    accountId:""
  }

}



componentDidMount(){

  var customerID=this.props.customerId;
  //console.log(this.props.customerId)
  
  axios.get(`http://localhost:2020/customerDetails/${customerID}`)
  .then(res => {
   console.log(res.data[0]);


   this.setState({

    accountId:res.data[0].accountId,
    customerId:res.data[0].customerId,
    Transactions:res.data
  });

})





}






    render() {
        return (
            <Container style={{marginTop:"150px"}}>


<Tab.Container defaultActiveKey="first1" >
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column" >
        <Nav.Item  style={{borderColor:"#d5d8de",borderStyle:"solid",borderBottomStyle:"none", boxShadow:" 5px 10px 20px #007BFF inset"}}>

          <Nav.Link eventKey="first1" 
           style={{height:"50px",paddingTop:"15px",color:"white"}}>Profile</Nav.Link>

        </Nav.Item>


        <Nav.Item style={{borderColor:"#d5d8de",borderStyle:"solid",borderBottomStyle:"none", boxShadow:" 5px 10px 20px #007BFF inset"}}> 
          <Nav.Link eventKey="second1" 
          style={{height:"50px",paddingTop:"15px",color:"white"}}>Transaction Details</Nav.Link>
        </Nav.Item>



        <Nav.Item style={{borderColor:"#d5d8de",borderStyle:"solid",borderBottomStyle:"none", boxShadow:" 5px 10px 20px #007BFF inset"}}>
          <Nav.Link eventKey="third1" 
          style={{height:"50px",paddingTop:"15px",color:"white"}}>Account Details</Nav.Link>
        </Nav.Item>


        <Nav.Item style={{borderColor:"#d5d8de",borderStyle:"solid", boxShadow:" 5px 10px 20px #007BFF inset"}}>
          <Nav.Link eventKey="fourth1" 
          style={{height:"50px",paddingTop:"15px",color:"white"}}>Claimed Offers</Nav.Link>
        </Nav.Item>


      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>

        <Tab.Pane eventKey="first1"  style={{borderColor:"#d5d8de",borderStyle:"solid",paddingTop:"80px",paddingBottom:"50px",paddingLeft:"15px",paddingRight:"25px",boxShadow:" 5px 10px 20px #007BFF inset"}}>
        <Profile  accountId={this.state.accountId} customerId={this.state.customerId}/>
      
        </Tab.Pane>

        <Tab.Pane eventKey="second1" style={{borderColor:"#d5d8de",borderStyle:"solid",paddingTop:"80px",paddingBottom:"75px",paddingLeft:"15px",paddingRight:"25px",boxShadow:" 5px 10px 20px #007BFF inset"}}>
         <Transaction Transactions={this.state.Transactions} />
        </Tab.Pane>
        <Tab.Pane eventKey="third1" style={{borderColor:"#d5d8de",borderStyle:"solid",paddingTop:"80px",paddingBottom:"75px",paddingLeft:"15px",paddingRight:"25px",boxShadow:" 5px 10px 20px #007BFF inset"}}>
       <Accounts accountId={this.state.accountId} customerId={this.state.customerId} />
        </Tab.Pane>
        <Tab.Pane eventKey="fourth1" style={{borderColor:"#d5d8de",borderStyle:"solid",paddingTop:"80px",paddingBottom:"75px",paddingLeft:"15px",paddingRight:"25px",boxShadow:" 5px 10px 20px #007BFF inset"}}>
         <ClaimedOffers customerId={this.props.customerId}/>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
                
            </Container>
        )
    }
}
