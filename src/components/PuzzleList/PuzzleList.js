import React from "react";
import allPuzzles from "../../allPuzzles";

function PuzzleList(){
    const finished = []
    for(let i=0;i<allPuzzles.length;i++){
        finished[i] = (JSON.parse(localStorage.getItem('gamegrid'+i)) || {}).won
    }
    console.log(finished)
    return(
        <>
            <h1>ALL PUZZLES</h1>
            <ul>
                {Object.keys(allPuzzles).map( i => {
                    return(
                        i==='0' ? '' :
                        <li key={i}>
                            <a href={`/puzzles/${i}`}>
                                {`Puzzle #${i}`}
                            </a>
                            {finished[i] ? '✅' : ''}
                        </li>  
                    )
                })}
            </ul>
        </>
    )
}

export default PuzzleList;