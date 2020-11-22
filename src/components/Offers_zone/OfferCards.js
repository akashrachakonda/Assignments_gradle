import React, { Component } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';



export default class OfferCards extends Component {
    constructor(props){
        super(props);
       // console.log(this.props.data.Offer_Category);
    }

    toggleChild=(category,desc,start,end)=>{
      this.props.toggle(category,desc,start,end);
   
    }

    render() {
     
        return (
           
     <MDBCol md='3'style={{height:"350px"}}>
<MDBCard narrow id="OfferCard">
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src={`http://localhost:3000/${this.props.data.Offer_Category}.jpg`}
              alt='food'
              style={{height:'120px'}}
            />
          </MDBView>

          <MDBCardBody style={{height:"180px"}}>
            <h5 className='pink-text' style={{height:"40px"}}>
              
              <MDBIcon icon={this.props.data.Icon_Name} style={{paddingRight:'10px'}}/> 
            
              {this.props.data.Offer_Category}
            </h5>

            <MDBCardText className='font-weight-bold' style={{height:"45px"}} >
            {this.props.data.Offer_Desc}
            </MDBCardText>


            <MDBBtn  color='primary' size="sm" style={{borderRadius:"25px",marginLeft:"35px"}}onClick={()=>{this.toggleChild(this.props.data.Offer_Category,this.props.data.Offer_Desc,this.props.data.Start_Date,this.props.data.End_Date)}} >Claim</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
      

   
              


                
          
        )
    }
}
