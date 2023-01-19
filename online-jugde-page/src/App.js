import './App.css';
import Main from './Main'
import Header from './Header'
import Student from './Student'
import Teacher from './Teacher'
import Footer from './Footer';
import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <div className='Container'>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/student/*' element={<Student/>}></Route>
          <Route path='/teacher/*' element={<Teacher/>}></Route>
        </Routes>
        <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
