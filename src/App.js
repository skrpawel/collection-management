import './App.css';
import React, { useEffect } from 'react';
import Latest from './Components/Latest';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import AdminPanel from './Components/AdminPanel.js';
import Tags from './Components/Tags/Tags';
import Register from './Components/Register'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Posts from './Components/Posts';


function App() {

  return (
    <div className="App p-8">
      <Navbar />
      <div className='flex flex-col items-center gap-12'>


        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>
              <Latest title='latest posts' />
              <Latest title='top 5 posts' />
              <Tags title='tag cloud' />
            </>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/dashboard" element={<AdminPanel />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </BrowserRouter>
        {/* <Login text="Don't have a account?" link="Register" />
        <Login text='Already a user?' link='Login' />
        <Form />
        <AdminPanel /> */}
      </div>
    </div>
  );
}

export default App;
