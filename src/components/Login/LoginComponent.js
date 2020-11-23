import React, { Component } from 'react'
import axios from 'axios';
import { Card,Container } from 'react-bootstrap';
export default class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            error:""
        }
        
    }

    handleLogin=(e)=>{

        e.preventDefault()
       var customerId=e.target.customerId.value;
       axios.get(`http://localhost:2020/authenticate/${customerId}`)
       .then(res=>{
           console.log(res.data)

           if(res.data)
           {
            this.props.authenticate(customerId)
           }
           else
           {
            this.setState({
                error:"Invalid User"    
            });
           }
       
        })
       
    }

      
   

   
   render() {
      return (
        <Container  style={{borderColor:"#d5d8de",borderStyle:"solid",paddingTop:"80px",paddingBottom:"75px",boxShadow:" 5px 10px 20px #007BFF inset",marginTop:"120px"}}>
        <Card  style={{width:"500px",marginLeft:"27%"}}>
            <Card.Body>

            
         <div>
            <form onSubmit={this.handleLogin}>
                
                <span style={{color:"red"}}>{this.state.error}</span>
                <div className="form-group">
                    <label>Enter UserID:</label>
                    <input type="text" className="form-control" name="customerId" placeholder="Enter User Id" required/>
                </div>


                

                <button type="submit" className="btn btn-primary btn-block"  >Login</button>
                
            </form>
         </div>
             
         </Card.Body>

</Card>
</Container>
      )
   }
};
