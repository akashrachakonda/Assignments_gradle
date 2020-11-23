import React from "react";
import Table from 'react-bootstrap/Table'
import {Card,Container,Row,Col} from 'react-bootstrap';
import './Transaction.css'
import axios from 'axios';

class ClaimedOffers extends React.Component
{
  constructor(props){
    super(props)
    this.state={
        offerClaimed:[]
    }
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
    render()
    {
        return(
          <Card>
          <Card.Body >

<Table striped bordered hover className="table-wrapper-scroll-y my-custom-scrollbar">
  <thead>
    <tr>
      <th style={{width:"150px"}}>S.No</th>
      <th style={{width:"150px"}}>Offer Category</th>
      <th style={{width:"150px"}}>Offer Description</th>
      <th style={{width:"150px"}}>Coupon Code</th>
      <th style={{width:"150px"}}>Expiry Date</th>
    </tr>
  </thead>

  <tbody>
    {
      this.state.offerClaimed.map((data,i)=>{
        return (
      <tr key={i}>
      <td >{this.state.offerClaimed.length -(i)}</td>
        <td>{data.offerCategory}</td>
        <td>{data.offerDescription}</td>
        <td style={{color:"green"}}><strong>{data.couponCode}</strong></td>
        <td style={{color:"red"}}><strong>{data.endDate}</strong></td>
    </tr>
        );
      }).reverse()
    
   }
  </tbody>

</Table>
</Card.Body>
  </Card>

        );
    }
}
export default ClaimedOffers;