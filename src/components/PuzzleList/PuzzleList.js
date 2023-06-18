import React from "react";
import allPuzzles from "../../allPuzzles";


function PuzzleList(){
    return(
        <>
            <h1>ALL PUZZLES</h1>
            <ul>
                {Object.keys(allPuzzles).map( i => {
                    return(
                        i==='0' ? '' :
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