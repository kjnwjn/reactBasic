import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent';
import ToDoList from './todos/ToDoList';
import Home from './example/Home';
import User from './User/User'
import UserDetail from './User/UserDetail'
import ListMonster from './monster/ListMonster';
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from './Nav/Nav'
function App() {
  return (
    <BrowserRouter>
      
     
    <div className="App body">
      <header className="App-header">
      <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <ToDoList/> */}
        {/* <MyComponent/> */}
        <Switch>
          <Route path="/"  exact="true">
          <Home />
          
          </Route>
          <Route path="/about" >
          <MyComponent />
          </Route>
          <Route path="/todos" >
          <ToDoList />
          </Route>
          <Route path="/monster" >
          <ListMonster />
          </Route>
          <Route path="/user" exact="true">
          <User />
          </Route>
          <Route path="/user/:id" >
          <UserDetail />
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
          {/* Same as */}
        <ToastContainer />
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossorigin></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin></script>
    </div>
    </BrowserRouter>
  );
}

export default App;
