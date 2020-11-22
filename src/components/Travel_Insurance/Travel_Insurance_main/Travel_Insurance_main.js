import { MDBBtn } from 'mdbreact';
import React,{Component} from 'react';

import {Form,Button,Col,Card,Container,Row} from 'react-bootstrap';

import 'react-dates/initialize';

import {DateRangePicker } from 'react-dates';

import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css'

class Travel_Insurance_main extends Component{
    constructor(props){
        super(props);
    }

    state = {
      startDate: moment(),
      endDate: moment().add(5, "day"),
      focusedInput: null

    }

    onDatesChange=({startDate,endDate})=>{
     // console.log(startDate+"-----"+endDate);
      this.setState({
        startDate:startDate,
        endDate:endDate
      })

    }

    render(){

      //console.log(this.state.startDate+"++++++"+this.state.endDate);

 return(
   <Container>
           
   <Card style={{height:"300px",backgroundColor:"#E0E0E0"}}>
 
<Card.Body>
<Form>

 <Form.Group  controlId="formGridState">
 <Row>
     <Col md="6"> 
  <Form.Label for="from" style={{marginRight:"300px"}}> From:</Form.Label>
   <Form.Control as="select" defaultValue="India" name="from"> 
     <option>India</option>
     <option>UK</option>
     <option>USA</option>
     <option>France</option>
     <option>Japan</option>
     <option>Iran</option>
     <option>Spain</option>
     <option>Singapore</option>
   </Form.Control>
   </Col>

   <Col md="6">
   <Form.Label for="from" style={{marginRight:"320px"}}> To:</Form.Label>
   <Form.Control as="select" defaultValue="USA" name="to">
   <option>Singapore</option>
     <option>Spain</option>
     <option>Iran</option>
     <option>Japan</option>
     <option>France</option>
     <option>USA</option>
     <option>UK</option>
     <option>India</option>
   </Form.Control>
   </Col>
   </Row>
 </Form.Group>
<div style={{marginTop:"50px"}}>
<DateRangePicker
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              focusedInput={this.state.focusedInput}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
              onDatesChange={this.onDatesChange}
              onFocusChange={(focused) => { this.setState(() => ({ focusedInput: focused}))}}
            />
</div>

   <MDBBtn color="primary" style={{marginTop:"30px",borderRadius:"25px"}}>Save</MDBBtn>
</Form>

</Card.Body>

</Card>
      </Container>
        );
    }
}

export default Travel_Insurance_main;