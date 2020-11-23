import React, { Component } from 'react'
import {Row,Col,Nav,Tab} from 'react-bootstrap'
import Offers from '../Offers_zone/Offers'
import Forex from '../Forex/Forex'
import Travel_Insurance_main from '../Travel_Insurance/Travel_Insurance_main/Travel_Insurance_main'

import {MDBMask,MDBView} from 'mdbreact';

export default class Dashboard extends Component {










    render() {
        return (
          

            <div style={{height:"100px"}}>


<Tab.Container id="left-tabs-example" defaultActiveKey="first" > 
  <Row> 
    <Col sm={3} style={{marginTop:"3px"}}>
      <Nav variant="pills" className="flex-column" >
        <Nav.Item  style={{borderColor:"#d5d8de",borderStyle:"solid",borderBottomStyle:"none", boxShadow:" 5px 10px 20px #007BFF inset"}}  >
        
         <Nav.Link  eventKey="first" style={{height:"150px",paddingTop:"65px",color:"white"}}><h4 style={{fontFamily: "Times New Roman"}} >Offers</h4></Nav.Link>
         
        </Nav.Item>
        <Nav.Item style={{borderColor:"#d5d8de",borderStyle:"solid",borderBottomStyle:"none", boxShadow:" 5px 10px 20px #007BFF inset"}}> 
          <Nav.Link eventKey="second" style={{height:"150px",paddingTop:"65px",color:"white"}}><h4 style={{fontFamily: "Times New Roman"}}>Travel Insurance</h4></Nav.Link>
        </Nav.Item>

        <Nav.Item style={{borderColor:"#d5d8de",borderStyle:"solid", boxShadow:" 5px 10px 20px #007BFF inset"}}>
          <Nav.Link eventKey="third" style={{height:"150px",paddingTop:"65px",color:"white"}}><h4 style={{fontFamily: "Times New Roman"}}>Currency Exchange</h4></Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first" style={{borderColor:"#d5d8de",borderStyle:"solid",paddingTop:"50px",paddingBottom:"75px",paddingLeft:"15px",paddingRight:"25px",boxShadow:" 5px 10px 20px #007BFF inset"}}>
         <Offers/>
        </Tab.Pane>
        <Tab.Pane eventKey="second"  style={{borderColor:"#d5d8de",borderStyle:"solid",paddingTop:"80px",paddingBottom:"75px",boxShadow:" 5px 10px 20px #007BFF inset"}}>
          <Travel_Insurance_main/>
        </Tab.Pane >

        <Tab.Pane eventKey="third" style={{borderColor:"#d5d8de",borderStyle:"solid",paddingTop:"80px",paddingBottom:"75px",boxShadow:" 5px 10px 20px #007BFF inset"}}>
          <Forex/>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>


                
            </div>
       
        )
    }
}
