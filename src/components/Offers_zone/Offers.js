import React,{Component,useState} from "react";
import "./Offers.css";
import axios from 'axios';
import ReactPaginate from 'react-paginate';

import {Container, Card,Button} from 'react-bootstrap';

import OfferCards from './OfferCards.js'; 

import {  MDBRow,MDBCol} from 'mdbreact';

import Loader from './Loader';

import Filter from './Filter';

import { connect } from "react-redux";

import mapStateToProps from './Offers_map';

import Modal from './Modal';



class Offers extends Component {

  constructor(props) {
    super(props)

    this.state = {
        offset: 0,
        tableData: [],
        orgtableData: [],
        perPage: 8,
        currentPage: 0,
        modalVisible:false,
        offerCategory:"",
        offerDesc:"",
        offerStartDate:"",
        offerEndData:"",
        iconName:""
    
    }
    this.handlePageClick = this.handlePageClick.bind(this);
}



toggle = (category,desc,start,end,iconName) => {
  this.setState({
    modalVisible: !this.state.modalVisible,
    offerCategory:category,
        offerDesc:desc,
        offerStartDate:start,
        offerEndData:end,
        iconName:iconName
  });
}



handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.loadMoreData()
    });

};

loadMoreData() {
const data = this.state.orgtableData;

const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
this.setState({
  pageCount: Math.ceil(data.length / this.state.perPage),
  tableData:slice
})

}

  componentDidMount(){

    


   axios.get("http://localhost:2020/offers/all/IN")
   .then(res => {

    console.log(this.props);
    var data = res.data;

    var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
    
    //console.log(res.data.length);

    this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
        orgtableData :res.data,
        tableData:slice
    })
});




  }



  render(){
    //first 0,1
    //0-3 //4-7
    const Mainarr=new Array(2).fill(0);

    const Innerarr=new Array(4).fill(0);
    

  return (

 
 <div>

<Modal 
modalVisible={this.state.modalVisible} 
toggle={this.toggle} 
offerCategory={this.state.offerCategory}
offerDesc={this.state.offerDesc}
offerStartDate={this.state.offerStartDate}
offerEndData={this.state.offerEndData}
/>
    <Container>




    <div>
  <Filter/>
</div>


<div>
{

  this.state.tableData.length>0?(

  Mainarr.map((x,i)=>{
    
    console.log(i);
    return (<MDBRow key={i}>
      {
        
    Innerarr.map((y,j)=>{

      console.log(this.state.tableData[i*4+j])
      return(

      
     < OfferCards data={this.state.tableData[i*4+j]} key={i*4+j} toggle={this.toggle}/>
       );

    })
  }
    </MDBRow>)
  })):( <Loader/>)
}
</div>

<div>
<ReactPaginate 
previousLabel={"prev"}
nextLabel={"next"}
breakLabel={"..."}  
breakClassName={"break-me"}
pageCount={this.state.pageCount}
marginPagesDisplayed={2}
pageRangeDisplayed={5}
onPageChange={this.handlePageClick}
containerClassName={"pagination"}
subContainerClassName={"pages pagination"}
activeClassName={"active"}
style={{color:"white"}}
/>
</div>

   </Container>



   </div>

    
  )}
 
}

// var Conn=connect(mapStateToProps)(Offers);
export default Offers;








//render(paginationBasic);




// this.state.tableData.map((tdata, i) => {
        

//   return(
//    < OfferCards data={tdata} key={i} />
//   );
 

// })