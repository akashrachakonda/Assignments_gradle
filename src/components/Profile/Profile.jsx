import React from "react";
import {Card,Form} from 'react-bootstrap';
import {MDBIcon} from 'mdbreact';

class Profile extends React.Component
{
  constructor(props){
    super(props)
  }

render ()
{

return(
   
    <div >
     
      <Card>
        <Card.Body>
        <img src ="profile-user.png"  style={{height:"100px",width :"100px",marginLeft:"43%",marginBottom:"5%"}} />
          
       
      <Form>
     
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Customer Id:</Form.Label>
    <Form.Control type="text" value={this.props.customerId}  />

  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Account Id:</Form.Label>
    <Form.Control type="text" value={this.props.accountId} />

  </Form.Group>


  


</Form>
             
</Card.Body>
             </Card>
            </div>
           
);
}
}
export default Profile;