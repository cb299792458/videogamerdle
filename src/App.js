import './App.css';
import React, { useState, useEffect } from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import TopBar from './components/TopBar/TopBar';
import Page from './components/Page/Page';
import HowToPlay from './components/HowToPlay/HowToPlay';
import PuzzleList from './components/PuzzleList/PuzzleList';

function App() {
    const [oldTheme, setOldTheme] = useState(true);
    useEffect(() => {
        const savedMode = localStorage.getItem('ggOldTheme');
        if (savedMode) {
            setOldTheme(JSON.parse(savedMode));
        } else {
            setOldTheme(true);
        }
    }, []);
    const toggleTheme = () => {
        const newMode = !oldTheme;
        setOldTheme(newMode);
        localStorage.setItem('ggOldTheme', JSON.stringify(newMode));
    };
    
    return (
        <div className='wrapper'>
        <div className={oldTheme ? 'side-panel' : 'new-side-panel'}/>

        <div className={oldTheme ? 'OldApp' : 'App'} id='content'>
            <TopBar oldTheme={oldTheme}/>
            <Routes>
                <Route path='/puzzles/:puzzleId' element={<Page toggleTheme={toggleTheme}/>} />
                <Route path='/how-to-play' element={<HowToPlay/>} />
                <Route path='/all-puzzles' element={<PuzzleList/>} />
                <Route exact path='/' element={<Home toggleTheme={toggleTheme}/>} />
            </Routes>
        </div>

        <div className={oldTheme ? 'side-panel' : 'new-side-panel'}/>
        </div>
    );
}

export default App;
