import React from "react";
import allPuzzles from "../../allPuzzles";


function PuzzleList(){
    return(
        <>
            <h1>ALL PUZZLES</h1>
            <ul>
                {Object.keys(allPuzzles).map( i => {
                    return(
                        <a href={`/puzzles/${i}`} key={i}><li>
                            {`Puzzle #${i}`}
                        </li></a>   
                    )
                })}
            </ul>
        </>
    )
}

export default PuzzleList;