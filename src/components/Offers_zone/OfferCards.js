import React, { Component } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import Modal from './Modal'


export default class OfferCards extends Component {
    constructor(props){
        super(props);
       // console.log(this.props.data.Offer_Category);
    }
    state={
      modalVisible:false

    }

    // toggleChild=(category,desc,start,end,couponCode)=>{
    //   this.props.toggle(category,desc,start,end,couponCode);
    //   console.log("CLAIM");
   
    // }

    toggle=()=>{
      this.setState({
        modalVisible:!this.state.modalVisible
      })
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


            <MDBBtn  color='primary' size="sm" style={{borderRadius:"25px",marginLeft:"18px"}}onClick={()=>{this.toggle()}} >Claim</MDBBtn>
          </MDBCardBody>
        </MDBCard>


        {this.state.modalVisible &&
            <Modal 
            modalVisible={this.state.modalVisible} 
            toggle={this.toggle} 
            offerCategory={this.props.data.offerCategory}
            offerDesc={this.props.data.offerDesc}
            offerStartDate={this.props.data.startDate}
            offerEndData={this.props.data.endDate}
            couponCode= {this.props.data.couponCode}
            />}



        </MDBCol>

          

                
          
        )







    }
}
