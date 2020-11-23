import { MDBBtn } from 'mdbreact';
import React,{Component} from 'react';

import {Form,Button,Col,Card,Container,Row} from 'react-bootstrap';

import 'react-dates/initialize';

import {DateRangePicker } from 'react-dates';

import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import InsuranceCards from '../InsuranceCards/InsuranceCards.js';

class Travel_Insurance_main extends Component{
    constructor(props){
        super(props);
    }

    state = {
      startDate: moment(),
      endDate: moment().add(5, "day"),
      focusedInput: null,
      insuranceClaimed:[]

    }

    onDatesChange=({startDate,endDate})=>{
     // console.log(startDate+"-----"+endDate);
      this.setState({
        startDate:startDate,
        endDate:endDate
      })

    }


    handler=()=>{
  
      let numberOfDays=(this.state.endDate -this.state.startDate)/86400000;
     let resultSet=[]
     if(numberOfDays<3){
       resultSet=[]
     }else{
       let offerPercentage = numberOfDays>10?0.4:0.1;
       ["Silver","Gold","Diamond"].forEach((obj,index)=>{
       resultSet.push({
         key:index,
         name:obj,
         tripCancellation:"100%",
         medicalCoverage:50000*(index+1),
         burglaryInsurance: 25000*(index+1),
         travelDelay:20000,
         accidentalDeath:35000*(index+1),
         totalPrice:Math.ceil(1000*numberOfDays*(index+1)-1000*numberOfDays*(index+1)*offerPercentage)
       })
     })
     console.log(resultSet)
     this.setState({
      insuranceClaimed:resultSet
     })

     }
   }



    render(){

      //console.log(this.state.startDate+"++++++"+this.state.endDate);

 return(
   <Container>
           
   <Card style={{backgroundColor:"#E0E0E0",paddingRight:"15px"}}>
 
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

   <MDBBtn  onClick={()=>this.handler()} color="primary" style={{marginTop:"30px",borderRadius:"25px"}}>Save</MDBBtn>
</Form>





<Row> 
{
this.state.insuranceClaimed.map((data,i)=>{
return (

<Col sm={4}>
<InsuranceCards data={data}/>
</Col>
)
})


}
</Row>


</Card.Body>

</Card>


      </Container>
        );
    }
}

export default Travel_Insurance_main;