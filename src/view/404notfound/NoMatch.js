import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const NoMatch=()=>{

  let history=useHistory()
 const backTohome=()=>{
    history.push('/')
  }
return (
  <>
    <div> 404 not found </div>
  <button onClick={()=>backTohome()}>Back to home</button>
  </>
)
}
export default NoMatch