// REDUX
/// giá trị khởi tạo của state
const initState={
  user:[
    {name:'bao',age:'24',id:1},
    {name:'bi',age:'25',id:2},
    {name:'bi',age:'25',id:3},


  ]
}
// store
const rootReducer =(state=initState, action)=>{
  switch(action.type) {
    case 'DELETE':
     console.log('hello',action)
      let user=state.user;
      user=user.filter(item=>item.id !== action.payload.id) 
     return {
      ...state,user
     }
    case'ADD':
    let id=Math.floor(Math.random()*10000)
    let users={id:id,name:`random ${id}`}
    return{
      ...state,user:[...state.user,users]
    }
    ;
    default: 
      return state
  }
}
export default rootReducer