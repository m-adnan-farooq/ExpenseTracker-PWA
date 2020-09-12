import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import {Main} from "./components/Main";
import {BrowserRouter as Router, Routes, Route, Link, Outlet, useParams} from 'react-router-dom';
import {History} from "./components/History";
import {NewTransaction} from "./components/NewTransaction";



function App() {
  return (
    <Main/>
  );
}

export const Main = () => {

  const transactionState:React.ComponentState = useState([{}]);  

  return (
      <div className="main">
          <Router>
              <div className = "navbar">
                  <Link to='/' className = "navlinks">Home</Link>
                  <Link to = 'history' className = "navlinks">View transaction history</Link>
                  <Link to = 'categories' className = "navlinks">View categories</Link>
                  <Link to = 'newtransaction'className = "navlinks">New transaction</Link>
              </div>
              <br></br>
              <Routes>
                  <Route path = 'newtransaction'><NewTransaction {...transactionState}/></Route>
                  <Route path = 'history'><History {...transactionState}/></Route>
                  <Route path = '/'><Home {...transactionState}/></Route>
              </Routes>
          </Router>
      </div>
  )
}

function Home() {
  return(
      <h3>I love you</h3>
  )
}


export default App;
