import React from "react";
import example1 from './example_grid.png'
import example2 from './highlights_example.png'
import './HowToPlay.css'

function HowToPlay(){
    return(
        <div className="how-to-play">
            <h1>HOW TO PLAY</h1>
            <p>
                Each puzzle has 16 video games. 
                There are five (or more) hidden themes linking the games in groups of four. 
                Drag and drop to swap two games, putting four linked games into a single row or column. 
                Be aware, some games will be used more than once. 
            </p>
            <img src={example1} width='400px' alt='example' />
            <p>
                If three out of four grouped games are in a single row or column, their outline will glow yellow.
                If all four are grouped, they'll change color. Watch out, the groups can be horizontal or vertical!
                Find all the groups in as few swaps as possible!
            </p>
            <img src={example2} width='400px' alt='example' />
            <p>Good Luck, Have Fun!</p>
        </div>
    )
}

export default HowToPlay;