import './App.css';
import React from 'react';
import Board from './components/Board/Board';


const example = {
  grid: [
      ['Overwatch','Street Fighter II: The World Warrior','Super Mario Odyssey','The Legend of Zelda: A Link to the Past'],
      ['Asteroids','The Legend of Zelda: Breath of the Wild','Super Mario Galaxy','World of Warcraft'],
      ['Super Mario World', 'Diablo', 'Frogger','The Legend of Zelda: Tears of the Kingdom'],
      ['The Legend of Zelda: A Link Between Worlds','Ms. Pac-Man','Starcraft','Super Mario 64'],
  ],
  answers: {
    purple: ['Mario Series', 'Super Mario Galaxy', 'Super Mario Odyssey', 'Super Mario World', 'Super Mario 64'],
    blue: ['Zelda Series', 'The Legend of Zelda: Breath of the Wild', 'The Legend of Zelda: Tears of the Kingdom', 'The Legend of Zelda: A Link to the Past', 'The Legend of Zelda: A Link Between Worlds'],
    red: ['Arcade Games', 'Asteroids', 'Ms. Pac-Man', 'Street Fighter II: The World Warrior', 'Frogger'],
    orange: ['Blizzard Games', 'Diablo', 'Starcraft', 'Overwatch', 'World of Warcraft'],
    green: ['"World" Titles', 'World of Warcraft', 'Super Mario World', 'Street Fighter II: The World Warrior', 'The Legend of Zelda: A Link Between Worlds'],
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">Video Game-erdle
      </header>
      <Board puzzle={example}/>
    </div>
  );
}

export default App;
