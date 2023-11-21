import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Button from './pages/button';
import Inputs from './pages/input';

function App() {
  return (
    <div className='flex flex-row w-full max-h-full bg-white max'>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/buttons' element={<Button/>} />
                <Route path='/inputs' element={<Inputs/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
