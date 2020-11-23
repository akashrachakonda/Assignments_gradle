import React from "react";
import {Card,Container,Row,Col} from 'react-bootstrap'

class Accounts extends React.Component
{
  constructor(props){
    super(props)
  }
    render()
    {
        return(
 
          <Container>
             <Card>
        <Card.Body>
  <Row>
    <Col> <Card border="primary" >
        
        <Card.Header><h4>SAVNINGS ACCOUNT</h4></Card.Header>
        <Card.Body>
         
          <Card.Text>
            Account number : {this.props.accountId}<br/><br/>
            Customer ID    : {this.props.customerId}<br/><br/>
            

          </Card.Text>
        </Card.Body>
      </Card></Col>
    <Col><Card border="secondary" >
    <Card.Header><h4>CURRENT ACCOUNT</h4></Card.Header>
    <Card.Body style={{height:"123px"}}>
      <Card.Text>
       No Current Account available
      </Card.Text>
    </Card.Body>
  </Card></Col>
  </Row>
  </Card.Body>
  </Card>
  </Container>

        );
    }
}
export default Accounts;