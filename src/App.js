import './App.css';
import Board from './components/Board/Board';


const example = {
  grid: [
      ['Super Mario Bros. 2','Super Mario Odyssey','Super Mario World','Super Mario Galaxy'],
      ['Final Fantasy III','Final Fantasy VII','Final Fantasy X','Final Fantasy VIII'],
      ['The Legend of Zelda: Ocarina of Time',"The Legend of Zelda: Link's Awakening",'The Legend of Zelda: A Link to the Past','The Legend of Zelda: Tears of the Kingdom'],
      ['Pokémon Blue','Pokémon Stadium','Pokémon Legends: Arceus','Pokémon GO'],
  ]
}

function App() {
  return (
    <div className="App">
      <header className="App-header">Video Game -rdle
      </header>
      <Board problem={example}/>
    </div>
  );
}

export default App;
