import React from "react";
import { useParams } from "react-router-dom";
import Board from "../Board/Board";
import _ from 'lodash';


const allPuzzles = {
    1: {
        red: ['Mario Series', 'Super Mario Galaxy', 'Super Mario Odyssey', 'Super Mario World', 'Super Mario 64'],
        blue: ['Zelda Series', 'The Legend of Zelda: Breath of the Wild', 'The Legend of Zelda: Tears of the Kingdom', 'The Legend of Zelda: A Link to the Past', 'The Legend of Zelda: A Link Between Worlds'],
        pink: ['Arcade Games', 'Asteroids', 'Ms. Pac-Man', 'Street Fighter II: The World Warrior', 'Frogger'],
        green: ['Blizzard Games', 'Diablo', 'Starcraft', 'Overwatch', 'World of Warcraft'],
        purple: ['"World" Titles', 'World of Warcraft', 'Super Mario World', 'Street Fighter II: The World Warrior', 'The Legend of Zelda: A Link Between Worlds'],
    },
    2: {
        red: ['Mario Series', 'Super Mario Galaxy', 'Super Mario Odyssey', 'Super Mario World', 'Super Mario 64'],
        blue: ['Zelda Series', 'The Legend of Zelda: Breath of the Wild', 'The Legend of Zelda: Tears of the Kingdom', 'The Legend of Zelda: A Link to the Past', 'The Legend of Zelda: A Link Between Worlds'],
        pink: ['Arcade Games', 'Asteroids', 'Ms. Pac-Man', 'Street Fighter II: The World Warrior', 'Frogger'],
        green: ['Blizzard Games', 'Diablo', 'Starcraft', 'Overwatch', 'World of Warcraft'],
        purple: ['"World" Titles', 'World of Warcraft', 'Super Mario World', 'Street Fighter II: The World Warrior', 'The Legend of Zelda: A Link Between Worlds'],
    },
    3: {
        red: ['Mario Series', 'Super Mario Galaxy', 'Super Mario Odyssey', 'Super Mario World', 'Super Mario 64'],
        blue: ['Zelda Series', 'The Legend of Zelda: Breath of the Wild', 'The Legend of Zelda: Tears of the Kingdom', 'The Legend of Zelda: A Link to the Past', 'The Legend of Zelda: A Link Between Worlds'],
        pink: ['Arcade Games', 'Asteroids', 'Ms. Pac-Man', 'Street Fighter II: The World Warrior', 'Frogger'],
        green: ['Blizzard Games', 'Diablo', 'Starcraft', 'Overwatch', 'World of Warcraft'],
        purple: ['"World" Titles', 'World of Warcraft', 'Super Mario World', 'Street Fighter II: The World Warrior', 'The Legend of Zelda: A Link Between Worlds'],
    },
    4: {
        red: ['Mario Series', 'Super Mario Galaxy', 'Super Mario Odyssey', 'Super Mario World', 'Super Mario 64'],
        blue: ['Zelda Series', 'The Legend of Zelda: Breath of the Wild', 'The Legend of Zelda: Tears of the Kingdom', 'The Legend of Zelda: A Link to the Past', 'The Legend of Zelda: A Link Between Worlds'],
        pink: ['Arcade Games', 'Asteroids', 'Ms. Pac-Man', 'Street Fighter II: The World Warrior', 'Frogger'],
        green: ['Blizzard Games', 'Diablo', 'Starcraft', 'Overwatch', 'World of Warcraft'],
        purple: ['"World" Titles', 'World of Warcraft', 'Super Mario World', 'Street Fighter II: The World Warrior', 'The Legend of Zelda: A Link Between Worlds'],
    },
    5: {
        red: ['Mario Series', 'Super Mario Galaxy', 'Super Mario Odyssey', 'Super Mario World', 'Super Mario 64'],
        blue: ['Zelda Series', 'The Legend of Zelda: Breath of the Wild', 'The Legend of Zelda: Tears of the Kingdom', 'The Legend of Zelda: A Link to the Past', 'The Legend of Zelda: A Link Between Worlds'],
        pink: ['Arcade Games', 'Asteroids', 'Ms. Pac-Man', 'Street Fighter II: The World Warrior', 'Frogger'],
        green: ['Blizzard Games', 'Diablo', 'Starcraft', 'Overwatch', 'World of Warcraft'],
        purple: ['"World" Titles', 'World of Warcraft', 'Super Mario World', 'Street Fighter II: The World Warrior', 'The Legend of Zelda: A Link Between Worlds'],
    },
}

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

function Page(){
    const {puzzleId} = useParams();
    const grid = puzzleId in allPuzzles ? parseGrid(allPuzzles[puzzleId]) : null;

    return(
        <>
            <p>This is a Puzzle Page #{puzzleId}</p>
            {puzzleId in allPuzzles ? <Board grid={grid} answers={allPuzzles[puzzleId]}/> : `Sorry, that puzzle doesn't exist yet!`}
        </>
    ) 
}

export default Page