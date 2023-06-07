import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Board from './components/Board/Board';
import Home from './components/Home/Home';
import TopBar from './components/TopBar/TopBar';

const example = {
  grid: [
      ['Overwatch','Street Fighter II: The World Warrior','Super Mario Odyssey','The Legend of Zelda: A Link to the Past'],
      ['Asteroids','The Legend of Zelda: Breath of the Wild','Super Mario Galaxy','World of Warcraft'],
      ['Super Mario World', 'Diablo', 'Frogger','The Legend of Zelda: Tears of the Kingdom'],
      ['The Legend of Zelda: A Link Between Worlds','Ms. Pac-Man','Starcraft','Super Mario 64'],
  ],
  answers: {
    red: ['Mario Series', 'Super Mario Galaxy', 'Super Mario Odyssey', 'Super Mario World', 'Super Mario 64'],
    blue: ['Zelda Series', 'The Legend of Zelda: Breath of the Wild', 'The Legend of Zelda: Tears of the Kingdom', 'The Legend of Zelda: A Link to the Past', 'The Legend of Zelda: A Link Between Worlds'],
    pink: ['Arcade Games', 'Asteroids', 'Ms. Pac-Man', 'Street Fighter II: The World Warrior', 'Frogger'],
    green: ['Blizzard Games', 'Diablo', 'Starcraft', 'Overwatch', 'World of Warcraft'],
    purple: ['"World" Titles', 'World of Warcraft', 'Super Mario World', 'Street Fighter II: The World Warrior', 'The Legend of Zelda: A Link Between Worlds'],
  }
}

function App() {
  return (
    <div className='wrapper'>
      <div className='side-panel'/>

      <div className="App">
        <TopBar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
        </Routes>
        <Board puzzle={example}/>
      </div>

      <div className='side-panel'/>
    </div>
  );
}

export default App;
