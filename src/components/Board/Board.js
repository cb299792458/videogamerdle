import './Board.css';
import React from 'react';
import {useState} from 'react';
// import _ from 'lodash';

function Board(props){
    console.log('Rendering')
    const [swaps, setSwaps] = useState(0)
    const puzzle = props.puzzle;
    const answers = puzzle.answers

    let grid=puzzle.grid;

    // function parseGrid(puzzle){
    //     let titles = new Set();
    //     for(let group of Object.values(puzzle)){
    //         for(let i=1;i<group.length;i++){
    //             titles.add(group[i])
    //         }
    //     }
    //     titles = Array.from(titles)
    //     grid = makeGrid(titles);
    // }
    // function makeGrid(titles){
    //     titles = _.shuffle(titles);
    //     const res = new Array(4).fill().map(()=>new Array(4));
    //     for(let r=0;r<4;r++){
    //         for(let c=0;c<4;c++){
    //             res[r][c] = titles[r*4 + c]
    //         }
    //     }
    //     return res;
    // }
    // parseGrid(answers)

    let origin = null;

    const styles = new Array(4).fill().map(()=>new Array(4).fill(null));
    const highlights = new Array(4).fill().map(()=>new Array(4).fill(false));
    for(let r=0;r<4;r++){
        for(let c=0;c<4;c++){
            styles[r][c] = useState('')
            highlights[r][c]=useState(false)
        }
    }
    const palette = ['red','blue','pink','green','purple','orange']

    function selectOrigin(e){
        e.preventDefault();
        origin = JSON.parse('['+e.target.id+']')
    }
    
    function selectDestination(e){
        e.preventDefault();
        const destination = JSON.parse('['+e.target.id+']')
        swap(origin,destination);
    }
    
    function swap(orig,dest){
        if(!orig || (orig[0]===dest[0] && orig[1]===dest[1])){

        } else {
            [grid[orig[0]][orig[1]],grid[dest[0]][dest[1]]] = [grid[dest[0]][dest[1]],grid[orig[0]][orig[1]]];

            check(grid);
            setSwaps(swaps+1)
        }
        origin=null;
    }

    function check(grid){
        let almost = 0;
        let finished = 0;

        // reset colors
        for(let r=0;r<4;r++){
            for(let c=0;c<4;c++){
                styles[r][c][1]('')
                highlights[r][c][1](false)
            }
        }

        for(let color of palette){
            // horizontal
            for(let r=0;r<4;r++){
                let count=0;
                for(let c=0;c<4;c++){
                    if(!(color in answers)) continue;
                    if(answers[color].includes(grid[r][c])) count++;
                }
                if(count===4){
                    for(let c=0;c<4;c++) styles[r][c][1](color)
                    finished++;
                }
                if(count===3){
                    for(let c=0;c<4;c++){
                        if(answers[color].includes(grid[r][c])) highlights[r][c][1](true)
                    }
                    almost++;
                }
            }

            // vertical
            for(let c=0;c<4;c++){
                let count=0;
                for(let r=0;r<4;r++){
                    if(!(color in answers)) continue;
                    if(answers[color].includes(grid[r][c])) count++;
                }
                if(count===4){
                    for(let r=0;r<4;r++){ 
                        styles[r][c][1](color)
                    }
                    finished++;
                }
                if(count===3){
                    for(let r=0;r<4;r++){
                        if(answers[color].includes(grid[r][c])) highlights[r][c][1](true)
                    }
                    almost++;
                }
            }
        }
        // if(almost) console.log('got 3')
        // console.table(colors)
        return {almost: almost, finished: finished}
    }

    return(
        <>
            <div id='board'>
                {grid.map( (line,r) => {
                    return <div id='row' key={r}>
                        {line.map( (_,c) => {
                            return <div className={`tile ${styles[r][c][0]} ${highlights[r][c][0] ? 'highlight' : ''}`} key={c} id={[r,c]}
                            // style={styles[r][c][0]} 
                            onPointerDown={selectOrigin} onPointerUp={selectDestination} onTouchMove={(e)=>e.preventDefault()}>
                                {grid[r][c]}
                            </div>
                        })}
                    </div>
                })}
            </div>
        </>
    )
};


export default Board;