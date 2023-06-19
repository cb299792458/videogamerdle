import React from "react";
import './Home.css'

function Home(){
    return(
        <>
            <div className="home">
                <h1>Welcome to GAME GRID!</h1>
                <p>
                    Made by <a href='https://cb299792458.github.io/personal-site/'>me</a>, as a fan-made, video game version of Cine2Nerdle. 
                    <br/>(Check out Cine2Nerdle, for movies, in the top right!)
                    <br/>Email puzzle suggestions and job offers to <a href="mailto: brianrlam@gmail.com">brianrlam@gmail.com</a>
                </p>
                <a href="/puzzles/1">Try a Puzzle!</a>

            </div>
        </>
    ) 
}

export default Home