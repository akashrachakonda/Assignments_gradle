import React from "react";
import {Card,Container,Row,Col} from 'react-bootstrap'

class Accounts extends React.Component
{
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
            Account number : 1JSN123LS<br/><br/>
            IFSC Code      : DBS12312<br/><br/>
            Balance : 2000 rs<br/>

          </Card.Text>
        </Card.Body>
      </Card></Col>
    <Col><Card border="secondary" >
    <Card.Header><h4>CURRENT ACCOUNT</h4></Card.Header>
    <Card.Body>
      <Card.Title>CURRENT</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
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