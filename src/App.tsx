import React from 'react';
import logo from './logo.svg';
import './App.css';
// import {Main} from "./components/Main";
import {BrowserRouter as Router, Routes, Route, Link, Outlet, useParams} from 'react-router-dom';
import {History} from "./components/History"

function App() {
  return (
    <Main/>
  );
}

export const Main = () => {
  return (
      <div className="main">
          <Router>
              <div className = "navbar">
                  <Link to='/' className = "navlinks">Home</Link>
                  <Link to = 'history' className = "navlinks">View transaction history</Link>
                  <Link to = 'categories' className = "navlinks">View categories</Link>
                  <Link to = 'newtransaction'className = "navlinks">New transaction</Link>
              </div>
              <Routes>
                  <Route path = 'history' element = {<History></History>}/>
                  <Route path = '/' element = {<Home></Home>}/>
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
