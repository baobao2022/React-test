import React from "react";
import { connect } from 'react-redux';
import Color from "../HOC/color";
class Home extends React.Component {
    state={
        user:{}
    }
    componentDidMount(){
       
    }

    //Redux connect qua pro và ta định nghĩa hàm delete dưới 1 action  
    handleDelete=(item)=>{
        this.props.deleteUserRedux(item)
    }
    handleAdd=()=>{
        this.props.addUserRedux()
    }
    //HOC: higher order component
    render() {
        console.log('>>>check props',this.props)
        let dataReDux=this.props.dataReDux
            
        return (
            <>
            <div>
                
                Testing
            </div>
                <div>
                    {dataReDux.map((item,index)=>{
                        return(
                        
                    <div key={index.id}>
                        {item.name}--{item.age} <span  onClick={() => this.handleDelete(item)}>X</span>
                    </div>
                    
                    )})}
                    <button onClick={()=>this.handleAdd()}>+</button>
                    
                </div>
            </>
        )
    }
}

const mapStateToProps=(state)=>{
   return{dataReDux:state.user}
}
const mapDispatchToProps=(dispatch)=>{
    return{
   deleteUserRedux:(userDelete)=>dispatch({type:'DELETE',payload:userDelete}),
   //tên 
   addUserRedux:()=>dispatch({type:'ADD',})
}}
export default connect(mapStateToProps,mapDispatchToProps)(Color(Home));