import './Page.css';
import React from "react";
import { useParams } from "react-router-dom";
import Board from "../Board/Board";
import _ from 'lodash';
import allPuzzles from "../../allPuzzles";


function parseGrid(puzzle){
    let titles = new Set();
    for(let group of Object.values(puzzle)){
        for(let i=1;i<group.length;i++){
            titles.add(group[i])
        }
    }
    titles = Array.from(titles)
    let testGrid = makeGrid(titles);
    while(!check(testGrid,puzzle)) testGrid = makeGrid(titles);
    return testGrid;
}

function makeGrid(titles){
    titles = _.shuffle(titles);

    const res = new Array(4).fill().map(()=>new Array(4));
    for(let r=0;r<4;r++){
        for(let c=0;c<4;c++){
            res[r][c] = titles[r*4 + c]
        }
    }
    return res;
}

function check(grid,puzzle){
    for(let color of Object.keys(puzzle)){
        // horizontal
        for(let r=0;r<4;r++){
            let count=0;
            for(let c=0;c<4;c++){
                if(puzzle[color].includes(grid[r][c])) count++;
            }
            if(count>2) return false;
        }
        
        // vertical
        for(let c=0;c<4;c++){
            let count=0;
            for(let r=0;r<4;r++){
                if(puzzle[color].includes(grid[r][c])) count++;
            }
            if(count>2) return false;
        }
    }
    return true;
}

function Page({toggleTheme}){
    const {puzzleId} = useParams();
    let state = JSON.parse(localStorage.getItem('gamegrid'+puzzleId)) || {};

    let grid = puzzleId < allPuzzles.length ? parseGrid(allPuzzles[puzzleId]) : null;

    const reset = () => {
        localStorage.removeItem('gamegrid'+puzzleId);
        state = {};
        window.location.reload(false);
    }

    return(
        <>
            <div id='page-info'>
                <p>Puzzle #{puzzleId}</p>
                <a href={`/puzzles/${parseInt(puzzleId)+1}`}><p>Next Puzzle</p></a>
            </div>
            {puzzleId in allPuzzles
                ? <Board grid={state.grid || grid} answers={allPuzzles[puzzleId]} id={puzzleId} oldSwaps={state.swaps || 0}/>
                : `Sorry, that puzzle doesn't exist yet!`
            }
            <div id='bottom-options'>
                <p onClick={reset}>Reset Progress?</p>
                <p onClick={toggleTheme}>Change Theme</p>
            </div>
        </>
    ) 
}

export default Page