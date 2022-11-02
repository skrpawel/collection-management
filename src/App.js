import './App.css';
import { React, useContext } from 'react';
import Latest from './Components/Latest';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import AdminPanel from './Components/AdminPanel.js';
import Tags from './Components/Tags/Tags';
import Register from './Components/Register'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Posts from './Components/Posts';
import ManageCollection from './Components/ManageCollection';
import EditCollection from './Components/EditCollection';
import { AuthContext } from './context/AuthContext';

// const lngs = {
//   en: { nativeName: 'English' },
//   pl: { nativeName: 'Polish' }
// };


function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="App p-8">
      <Navbar />
      <div className='flex flex-col items-center gap-12'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>
              <Latest title='latest posts' url='latest' />
              <Latest title='top 5 posts' url='latest' />
              <Tags title='tag cloud' />
            </>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            {(currentUser) && (currentUser.type === 'admin') && <Route path="/dashboard" element={<AdminPanel />} />}
            <Route path="/posts" element={<Posts />} />
            {currentUser && <>
              <Route path="/collection" element={<ManageCollection />} />
              <Route path="/edit_collection" element={<EditCollection />} />
            </>}
          </Routes>

        </BrowserRouter>
      </div>
    </div>
  );
}



export default App;


// export default App;
