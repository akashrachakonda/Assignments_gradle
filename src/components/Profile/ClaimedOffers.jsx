import React from "react";
import Table from 'react-bootstrap/Table'
import {Card,Container,Row,Col} from 'react-bootstrap'
class ClaimedOffers extends React.Component
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
      <th>Offer Name</th>
      <th>Promocode</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>movies discount</td>
      <td>A1WH12122HH12JJ</td>
    </tr>
    <tr>
      <td>2</td>
      <td>uber Offer</td>
      <td>ASD123DJK12J21H3</td>
    </tr>
    <tr>
      <td>3</td>
      <td >Zomato Offer</td>
      <td>JSDFGHS123LJ</td>
    </tr>
  </tbody>
</Table>
</Card.Body>
  </Card>

        );
    }
}
export default ClaimedOffers;