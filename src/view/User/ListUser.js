import axios from 'axios';
import React from "react";
import { withRouter } from "react-router-dom";
import './ListUser.scss';

class ListUser extends React.Component{
  state={
    listUser:[]
  }
   async componentDidMount(){
      // axios.get('https://reqres.in/api/users?page=2')
      // .then(res=>{
      //   console.log('....check res',res.data)
      // })
      let res= await axios.get('https://reqres.in/api/users?page=2')
      this.setState({
        listUser: res && res.data && res.data.data ?res.data.data :[]
      })
    }
    handleShowDetailUser=(user)=>{
      this.props.history.push(`/user/${user.id}`)
    }

    
 render(){
     let {listUser}=this.state
    return(
    <div className='list-container'>
       <div className='title'>
           
 
             Fetch all list users
           </div>
 
           <div className='User-content'>
             <div className='child'>
              {listUser && listUser.length>0 && 
               listUser.map((item,index)=>{return(
                 <div className='child' key={index.id}
                 onClick={()=>this.handleShowDetailUser(item)}
                 >
                   {index+1}--{item.first_name}--{item.last_name}
                 </div>
                 
               )})
              }
              
             </div>
           </div>
       </div>
 
   )
 }}
export default withRouter(ListUser)