
import './App.css';
import { useEffect, useState } from 'react';
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
        
        <Route path='/seeall' element={<SeeAll/>}></Route>
        
        <Route path='/news' element={<News />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        
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
