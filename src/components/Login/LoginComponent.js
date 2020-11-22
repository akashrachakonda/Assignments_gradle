import React, { Component } from 'react'
import axios from 'axios';
import { Card,Container } from 'react-bootstrap';
export default class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
            userId : ""
        }
        this.updateInput = this.updateInput.bind(this);
        this.validate = this.validate.bind(this);
    }
    componentDidMount() {
        axios.get(`http://localhost:3000/Sheet1`)
          .then(res => {
            const userss = res.data;
            this.setState({ users : userss});
          })
      }
      
      updateInput(event){
        this.setState({userId : event.target.value})
        }
    validate(){
       var temp = this.state.userId
       var i = 0
        for(i = 0; i < this.state.users.length; i++) {
            var obj = this.state.users[i];
            if(temp == obj.CustomerId)
            {
                alert("Valid User")
                break
            }
        }
        if(i >= this.state.users.length){
        alert("Invalid Users")
        }
        
    }
   
   render() {
      return (
        <Container  style={{borderColor:"#d5d8de",borderStyle:"solid",paddingTop:"80px",paddingBottom:"75px",boxShadow:" 5px 10px 20px #007BFF inset",marginTop:"120px"}}>
        <Card  style={{width:"500px",marginLeft:"27%"}}>
            <Card.Body>

            
         <div>
            <form>
  

                <div className="form-group">
                    <label>Enter UserID:</label>
                    <input onChange={this.updateInput} type="text" className="form-control" placeholder="Enter User Id" required/>
                </div>


                

                <button type="button" className="btn btn-primary btn-block" onClick={this.validate}>Login</button>
                
            </form>
         </div>
             
         </Card.Body>

</Card>
</Container>
      )
   }
};
