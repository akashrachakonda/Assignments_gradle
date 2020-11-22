import React, { Component } from 'react'

import Skeleton from 'react-skeleton-loading';

import {  MDBRow,MDBCol} from 'mdbreact';

export default class Loader extends Component {
    constructor(props){
        super(props);
    }
    render() {


        const Mainarr=new Array(2).fill(0);

        const Innerarr=new Array(4).fill(0);

        return (
            <div>
                { Mainarr.map((x,i)=> {
    
    return (<MDBRow key={i}>
      {
        
    Innerarr.map((y,j)=>{

      return(

      <MDBCol md="3" key={j}> 
     < Skeleton width={190} height={180} key={i*4+j} />
     <Skeleton width={190} count={3} />
     </MDBCol>
       );
       
    })
  }
    </MDBRow>)
  })}
            </div>
        )
    }
}
