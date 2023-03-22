import { Route, Routes } from 'react-router-dom';
import './App.css';
import Search from './components/Search';
import Infos from './components/Infos';


function App() {
 
  return (
    <div className="App container">
      <Search />
      <Routes>
        {/* <Route path="/" element={<Search />} /> */}
        <Route path="/:category/:id" element={<Infos />} />
        <Route path="*" element={<div className='text-center'><p>❌ These aren't what you're looking for!!</p><Error /></div>} />
      </Routes>
    </div>
  );
}

export default App;
