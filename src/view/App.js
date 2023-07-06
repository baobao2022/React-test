import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Home from './Example/Home';
import MyComponent from './Example/MyComponent.js';
import Nav from './Nav/Nav';
import ListTodo from './Todos/ListTodo';
import DetailUser from "./User/DetailUser";
import ListUser from "./User/ListUser";
import logo from './logo.svg';
import NoMatch from "./404notfound/NoMatch";
import YoutubeSreach from "./Youtube/Youtube";
// import { Button } from "bootstrap";
/**
 * 2 components: class component / function component ( function, arrow)
 * JSX
 */

function App() {
  // const  App = () =>  {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/user" exact>             
              <ListUser />
            </Route>
            <Route path="/user/:id">             
              <DetailUser />
            </Route>
            <Route path="/youtube">
            <YoutubeSreach />
            </Route>
            <Route path="/about">
            <MyComponent />
            </Route>
            <Route>
      <NoMatch  path="*"/>
    </Route>
          </Switch>

        </header>


        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;