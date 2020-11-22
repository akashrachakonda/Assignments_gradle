import React,{Component} from 'react';

import {Card,Button} from 'react-bootstrap';

class Travel_Insurance extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>

  <Card style={{ width: '12rem',height:'9rem'}} >
  <Card.Body>
    <Card.Title> Travel Insurance</Card.Title>

  </Card.Body>
  <Button variant="primary" >Click here</Button>
</Card>




            
            
            </div>
        );
    }
}


export default Travel_Insurance;