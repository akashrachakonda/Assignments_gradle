import React, { Component } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView,MDBBtn } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Offers from './components/Offers_zone/Offers';

import Navbar from './components/Navbar/Navbar';
import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import { Container } from 'react-bootstrap';

import ToggleModal from  './components/ToggleModal/ToggleModal';


export default class Home extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <MDBView src="1.jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            
            <p className="line-1 anim-typewriter" style={{marginTop:"120px"}}>Welcome</p>
            <p className="line-1 anim-typewriter1">To</p>
            <p className="line-1 anim-typewriter2">Travel Safe With Travel Mode</p>

            
           <a href="#dashboard"> <MDBBtn gradient="purple" style={{marginTop:"120px"}}>View Dashboard</MDBBtn>
              </a>  

      
            </MDBMask>
           
          </MDBView>
        

        <main>
          <Container className="text-center my-5" id="dashboard"
           style={{paddingTop:"100px"}}>
            


         


           {this.props.switchToggle?<Dashboard />:
           
           <div style={{borderColor:"#d5d8de",borderStyle:"solid",paddingTop:"50px",paddingBottom:"75px",paddingRight:"10px",paddingLeft:"10px",boxShadow:" 5px 10px 20px #007BFF inset"}}>

           <Offers  />

       

           </div>
           
           } 




           
           

          </Container>
       
          
          </main>
            </div>
        )
    }
}
