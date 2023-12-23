import React from "react";
import './Home.css'
import allPuzzles from "../../allPuzzles";
import grid from './grid.png'

function Home({toggleTheme}){
    return(
        <>
            <div className="home">
                <h1>Welcome to GAMEGRID!</h1>
                <div id="splash-container">
                    <img id="splash" src={grid} alt='game grid icon' />
                </div>
                <p>
                    Made by <a href='https://cb299792458.github.io/personal-site/'>me</a>, as a fan-made, video game version of Cine2Nerdle. 
                    <br/>(Check out Cine2Nerdle, for movies, in the top right!)
                    <br/>Email puzzle suggestions and job offers to <a href="mailto: brianrlam@gmail.com">brianrlam@gmail.com</a>
                </p>

                <div className="puzzrow">
                    <div className="puzzcol">
                        <a href="/puzzles/1">Try a Puzzle!</a>
                        <a href={`/puzzles/${allPuzzles.length-1}`}>Newest Puzzle</a>
                    </div>
                    <div className="puzzcol">
                        <a href={`/puzzles/${Math.ceil(Math.random()*allPuzzles.length)}`}>Random Puzzle</a>
                        <a href='/' onClick={toggleTheme} id="change">Change Theme</a>
                    </div>
                </div>

            </div>
        </>
    ) 
}

export default Home