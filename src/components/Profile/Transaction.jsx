import React from "react";
import Table from 'react-bootstrap/Table'
import {Card,Container,Row,Col} from 'react-bootstrap'
class Transaction extends React.Component
{
    render()
    {
        return(

 
  <Card>
     <Card.Body>
            
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Transaction ID</th>
      <th>Transaction type</th>
      <th>Amount(SGD)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>1000</td>
      <td>fuel</td>
      <td>100</td>
    </tr>
    <tr>
      <td>2</td>
      <td>1001</td>
      <td>movie</td>
      <td>20</td>
    </tr>
    <tr>
      <td>3</td>
      <td >1003</td>
      <td>transport</td>
      <td>30</td>
    </tr>
  </tbody>
</Table>
</Card.Body>
</Card>

        );
    }
}
export default Transaction;