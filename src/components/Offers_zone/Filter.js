import React, { Component } from "react";
import { MDBSelect,MDBBtn, MDBSelectInput, MDBSelectOptions, MDBSelectOption, MDBRow, MDBCol } from "mdbreact";
import {Form} from 'react-bootstrap';


class Filter extends Component {
  constructor(props){
    super(props)

  }
  render() {
    
 var {refCat,refCountry}=this.props.innerRef
  

    return (
      <MDBRow className="border border-light " style={{backgroundColor:"#E0E0E0",marginTop:"0px",marginBottom:"15px",paddingTop:"15px",borderRadius:"5px"}} >
        <MDBCol md="5">
        <Form>
    <Form.Group controlId="category">
    <Form.Label>Select Category</Form.Label>
    <Form.Control as="select" size="sm" custom  ref={refCat}>
    <option>all</option>
    <option>Vouchers</option>
    <option>Restaurants</option>
    <option>Resorts</option>
    <option>Taxi</option>
    <option>Flights</option>
    <option>Mobile Bill Plans</option>
   
    </Form.Control>
  </Form.Group>
  </Form>
        </MDBCol>    
        <MDBCol md="4" >
        <p style={{marginBottom:"6px"}}>Select Country</p>

<input list="Country" name="ctry" id="ctry"  ref={refCountry}/>

<datalist id="Country" >
  <option value="IN">India</option>
  <option value="FR">France</option>
  <option value="UK">United Kingdom</option>
  <option value="US">America</option>
  <option value="JP">Japan</option>
  <option value="SP">Spain</option>
  <option value="ID">Indonesia</option>
 

  </datalist>
        </MDBCol>
        <MDBCol md="3" style={{marginTop:"12px"}}>
        <MDBBtn style={{borderRadius:"25px"}} color="primary" 
        onClick={this.props.handleFiltersChange}>Apply Filter</MDBBtn>
        </MDBCol>


      </MDBRow>
    );
  }
}

export default Filter;