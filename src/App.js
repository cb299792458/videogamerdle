import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import TopBar from './components/TopBar/TopBar';
import Page from './components/Page/Page';

function App() {
  return (
    <div className='wrapper'>
      <div className='side-panel'/>

      <div className="App">
        <TopBar />
        <Routes>
          <Route path='/puzzles/:puzzleId' element={<Page/>} />
          <Route exact path='/' element={<Home/>} />
        </Routes>
      </div>

      <div className='side-panel'/>
    </div>
  );
}

export default App;
