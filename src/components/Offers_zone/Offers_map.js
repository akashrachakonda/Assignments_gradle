import React, { Component } from 'react';


const mapStateToProps=(state)=>{

    return {
       offers:state.offers[state.currentPage],
       filters:state.filters,
       existingOffers:state.existingOffers,
       currentPage:state.currentPage
    }
}

export default mapStateToProps;


