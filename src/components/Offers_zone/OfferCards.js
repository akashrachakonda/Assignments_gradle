import React, { Component } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';



export default class OfferCards extends Component {
    constructor(props){
        super(props);
       // console.log(this.props.data.Offer_Category);
    }

    toggleChild=(category,desc,start,end,couponCode)=>{
      this.props.toggle(category,desc,start,end,couponCode);
   
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
              src={`http://localhost:3000/${this.props.data.offerCategory}.jpg`}
              alt='food'
              style={{height:'120px'}}
            />
          </MDBView>

          <MDBCardBody style={{height:"180px"}}>
            <h5 className='pink-text' style={{height:"40px"}}>
              
              <MDBIcon icon={this.props.data.iconName} style={{paddingRight:'10px'}}/> 
            
              {this.props.data.offerCategory}
            </h5>

            <MDBCardText className='font-weight-bold' style={{height:"45px"}} >
            {this.props.data.offerDesc}
            </MDBCardText>


            <MDBBtn  color='primary' size="sm" style={{borderRadius:"25px",marginLeft:"18px"}}onClick={()=>{this.toggleChild(this.props.data.offerCategory,this.props.data.offerDesc,this.props.data.startDate,this.props.data.endDate,this.props.data.couponCode)}} >Claim</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
      

   
              


                
          
        )
    }
}
