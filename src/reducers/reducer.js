

const storeData={
    filters:{
        Category:"",
        Country_code:"IN"
    },
    offers:{},
    currentPage:1,
    existingOffers:[]
}

export default (state=storeData,action)=>{
    var tempOffers;
  

   switch(action.type){
       case "ADD_NEW_OFFER":
           tempOffers = state.offers;
           tempOffers[action.payload.currentPage]=action.payload.offers
       return{
        ...state,
        offers:tempOffers,
      currentPage:action.payload.currentPage,
      existingOffers:state.existingOffers.concat(action.payload.currentPage)


       }
       break;

       case "GET_EXISTING_OFFER":
           return{
            ...state,
            currentPage:action.payload.currentPage

           }

        default :
        return {
            ...state
        }

   }
}

