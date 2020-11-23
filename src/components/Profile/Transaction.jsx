import React from "react";
import Table from 'react-bootstrap/Table'
import {Card,Container,Row,Col} from 'react-bootstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import Scrollbar from 'react-perfect-scrollbar'

import './Transaction.css';


class Transaction extends React.Component
{
  constructor(props){
    super(props)
  }


    render()
    {
        return(

 
  <Card>
     <Card.Body>
            
<Table striped bordered hover className="table-wrapper-scroll-y my-custom-scrollbar">
  <thead >
    <tr>
      <th style={{width:"150px"}}>S.No</th>
      <th style={{width:"170px"}}>Transaction ID</th>
      <th style={{width:"200px"}}>Transaction Category</th>
      <th style={{width:"200px"}}>Amount</th>
    </tr>
  </thead>
  
  <tbody >
    


    {
    

    this.props.Transactions.map((data,i)=>{

      return (
 
        <tr key={i} >
      <td  >{i+1}</td>    
      <td>{data.transactionId}</td>
      <td>{data.transactionCategory}</td>
      <td>{data.transactionAmount}</td>
    </tr>

      );


    })
    
    }

 

  </tbody>
</Table>
</Card.Body>
</Card>

        );
    }
}
export default Transaction;