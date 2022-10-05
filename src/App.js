import './App.css';
import Latest from './Components/Latest';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='flex flex-col items-center gap-12'>
        <Latest title='latest posts' />
        <Latest title='top 5 posts' />
      </div>
    </div>
  );
}

export default App;
