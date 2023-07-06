import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
class DetailUser extends React.Component{
  state={
    user:{}
  }
 async componentDidMount(){
    if(this.props.match && this.props.match.params){
    let id=this.props.match.params.id
    let res =await axios.get(`https://reqres.in/api/users/${id}`)
    this.setState({
      user:res && res.data &&res.data.data ?res.data.data:{}
    })
  }}
   backtoList=()=>{
      this.props.history.push(`/user`)
   }
  render(){
    let{user}=this.state
    console.log(user)
    let isEmptyObj = Object.keys(user).length === 0;
    return(<>
      <div>hello this is page of user with id: {this.props.match.params.id}</div>
    { isEmptyObj === false && 
    <>
      <div> user'name:{user.first_name} -{user.last_name}</div>
      <div>user'emal:{user.email}</div>
      <img src={user.avatar} alt="avarta"></img><br/>
      <button onClick={()=>this.backtoList()}>Back</button>

      </>
    }
    </>
    )
  }
}
export default withRouter(DetailUser)