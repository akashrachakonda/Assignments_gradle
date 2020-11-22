import React, { Component } from "react";
import { MDBSelect,MDBBtn, MDBSelectInput, MDBSelectOptions, MDBSelectOption, MDBRow, MDBCol } from "mdbreact";
import {Form} from 'react-bootstrap';


class Filter extends Component {
  render() {
    return (
      <MDBRow className="border border-light " style={{backgroundColor:"#E0E0E0",marginTop:"0px",marginBottom:"15px",paddingTop:"15px",borderRadius:"5px"}} >
        <MDBCol md="5">
        <Form>
    <Form.Group controlId="exampleForm.SelectCustomSizeSm">
    <Form.Label>Select Category</Form.Label>
    <Form.Control as="select" size="sm" custom>
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
<input list="Country" name="ctry" id="ctry" />

<datalist id="Country">
  <option value="India"/>
  <option value="UK"/>
  <option value="USA"/>
  <option value="France"/>
  <option value="Japan"/>
  <option value="Iran"/>
  <option value="Spain"/>
  </datalist>
        </MDBCol>
        <MDBCol md="3" style={{marginTop:"12px"}}>
        <MDBBtn style={{borderRadius:"25px"}} color="primary">Apply Filter</MDBBtn>
        </MDBCol>


      </MDBRow>
    );
  }
}

export default Filter;