
import './App.css';
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import "./components/fontawsomeIcons"
import Navigation from './components/Navigation';
import About from './components/About';
import News from './components/News';
import Footer from './components/Footer';
import Detail from './components/Detail';
import Login from './components/Login';
import Add from './components/Add';
import { Row, Col } from 'react-materialize'
import M from 'materialize-css'
import {
  Routes,
  Route,
} from "react-router-dom";
import FilmsPresentation from './components/FilmsPresentation';
import FilmsPresentation2 from './components/FilmsPresentation2';
import FilmsPresentation3 from './components/FilmsPresentation3';
import Update from './components/Update';
import SeeAll from './components/SeeAll';
import Dashboard from './components/Dashboard';
import Protected from './components/Protected';
function App() {
  return (
    <div className='App'>
      <Navigation />
      
      <Routes>
        <Route path='/' element={<FilmsPresentation />}></Route>
        <Route path='/page2' element={<FilmsPresentation2/>}></Route>
        <Route path='/page3' element={<FilmsPresentation3/>}></Route>
        <Route path='/seeall' element={<SeeAll/>}></Route>
        
        <Route path='/news' element={<News />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='page2/detail/:id' element={<Detail />}></Route>
        <Route path='page3/detail/:id' element={<Detail />}></Route>
        <Route path='seeall/detail/:id' element={<Detail />}></Route>
        <Route path='/add' element={<Protected><Add/></Protected>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/dashboard' element={<Protected><Dashboard/></Protected>}></Route>
      </Routes >
      <Footer />
    </div >
  );
}

export default App;
