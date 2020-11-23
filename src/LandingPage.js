import React, { Component } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView,MDBBtn } from 'mdbreact';

export default class LandingPage extends Component {

    constructor(props){
        super(props);
      
    }
    


    render() {
        return (
            <div>
                <MDBView src={this.props.landingPageImage} id="landingPage" >
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            
            <p className="line-1 anim-typewriter" style={{marginTop:"120px"}}>Welcome</p>
            <p className="line-1 anim-typewriter1">To</p>
            <p className="line-1 anim-typewriter2">Travel Safe With Travel Mode</p>

            
           <a href="#dashboard"> <MDBBtn gradient="purple" style={{marginTop:"120px"}}>View Dashboard</MDBBtn>
              </a>  

      
            </MDBMask>
           
          </MDBView>
            </div>
        )
    }
}
