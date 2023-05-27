import './Board.css'
import React from 'react'
import {useState} from 'react'

function Board(props){
    console.log('Rendering')
    const [swaps, setSwaps] = useState(0)
    const puzzle = props.puzzle;
    const grid = puzzle.grid;
    const answers = puzzle.answers

    let origin = null;

    const colors = new Array(4).fill().map(()=>new Array(4).fill(null));
    for(let r=0;r<4;r++){
        for(let c=0;c<4;c++){
            colors[r][c] = useState('')
        }
    }
    const palette = ['purple','blue','red','orange','green']

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
            origin=null;
            return;
        } else {
            [grid[orig[0]][orig[1]],grid[dest[0]][dest[1]]] = [grid[dest[0]][dest[1]],grid[orig[0]][orig[1]]];

            check();
            setSwaps(swaps+1)
            origin=null;
        }
    }

    function check(){
        let finished = 0;

        // reset colors
        for(let r=0;r<4;r++){
            for(let c=0;c<4;c++){
                colors[r][c][1]('')
            }
        }

        for(let color of palette){
            // horizontal
            for(let r=0;r<4;r++){
                let count=0;
                for(let c=0;c<4;c++){
                    if(answers[color].includes(grid[r][c])) count++;
                }
                if(count===4){
                    // console.log('MATCH: ', answer[0])
                    for(let c=0;c<4;c++) colors[r][c][1](color)
                    finished++;
                }
            }

            // vertical
            for(let c=0;c<4;c++){
                let count=0;
                for(let r=0;r<4;r++){
                    if(answers[color].includes(grid[r][c])) count++;
                }
                if(count===4){
                    // console.log('MATCH: ', answer[0])
                    for(let r=0;r<4;r++) colors[r][c][1](color)
                    finished++;
                }
            }
        }
        if(finished===5) window.alert("You Win!")
    }

    return(
        <>
            <div id='board'>
                {grid.map( (line,r) => {
                    return <div id='row' key={r}>
                        {line.map( (tile,c) => {
                            return <div className='tile' key={c} id={[r,c]} style={colors[r][c][0] ? {backgroundColor: colors[r][c][0], color: 'white'} : {}} onPointerDown={selectOrigin} onPointerUp={selectDestination}>
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