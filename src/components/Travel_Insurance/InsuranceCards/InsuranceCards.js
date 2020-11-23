import Axios from 'axios';
import { MDBBtn } from 'mdbreact';
import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import './InsuranceCards.css';

export default class InsuranceCards extends Component {

    constructor(props){
        super(props)
        this.state={
            buttonName:"Claim",
            buttonColor:"primary"
        }
    }


    InsuranceHandler=()=>{
        const header={
            headers:{
                'Content-Type':'application/json'
            }
        }
        var customerId=localStorage.getItem("customerId");
        
        var data=this.props.data;
        data["customerId"]=customerId;

        Axios.post("http://localhost:2020/addInsuranceClaim",JSON.stringify(data),header)
        .then(res=>{

            this.setState({
                buttonName:"Claimed!",
                buttonColor:"warning"
            })
        })
        .catch(err=>
            {
                console.log(err)
            }
        )
    }

    render() {
        
        return (

            <div>
 <h3>{this.props.data.name}</h3>              
<div class="flip-card" >
  <div class="flip-card-inner">
    <div class="flip-card-front">

      <img src={this.props.data.name+".jpg"} alt="Avatar" style={{width:"250px",height:"320px"}}/>
    </div>

    <div class="flip-card-back" style={{padding:"8px"}} >
        <h3 >{this.props.data.name}</h3>
        <p><strong>Trip Cancellation :</strong> {this.props.data.tripCancellation}</p>
      <p><strong>Medical Coverage:</strong>{this.props.data.medicalCoverage}</p> 
      <p><strong>Burglary Insurance:</strong>{this.props.data.burglaryInsurance}</p>
      <p><strong>Travel Delay:</strong>{this.props.data.travelDelay}</p>
      <p><strong>Accidental Death:</strong>{this.props.data.accidentalDeath}</p>
      <p style={{color:"black"}}><strong >Insurance Claim Price:</strong>{this.props.data.totalPrice}</p>
      <MDBBtn onClick={ this.InsuranceHandler} color={this.state.buttonColor} style={{borderRadius:"10px"}} >{this.state.buttonName}</MDBBtn>      
    </div>
  </div>
</div>
            </div>
           
        )
    }
}
