import './App.css';
import React, { useEffect } from 'react';
import Latest from './Components/Latest';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts'
import Form from './Components/Form';
import AdminPanel from './Components/AdminPanel.js';
import Tags from './Components/Tags/Tags';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="App p-8">
      <Navbar />
      <div className='flex flex-col items-center gap-12'>
        <Latest title='latest posts' />
        <Latest title='top 5 posts' />
        <Tags title='tag cloud' />
        {/* <Login text="Don't have a account?" link="Register" />
        <Login text='Already a user?' link='Login' />
        <Form />
        <AdminPanel /> */}
      </div>
    </div>
  );
}

export default App;
