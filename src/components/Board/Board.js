import './Board.css';
import React from 'react';
import {useState} from 'react';

function Board(props){
    // console.log('Rendering')
    const [swaps, setSwaps] = useState(0)

    const answers = props.answers;
    const colors = Object.keys(answers);
    const answerStatus = {};
    for(let color of colors) answerStatus[color]=useState(false);
    const grid=props.grid;
    
    let origin = null;
    
    const styles = new Array(4).fill().map(()=>new Array(4).fill(null));
    const highlights = new Array(4).fill().map(()=>new Array(4).fill(false));
    for(let r=0;r<4;r++){
        for(let c=0;c<4;c++){
            styles[r][c] = useState('')
            highlights[r][c]=useState(false)
        }
    }
    
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
        // reset colors
        for(let r=0;r<4;r++){
            for(let c=0;c<4;c++){
                styles[r][c][1]('')
                highlights[r][c][1](false)
            }
        }
        for(let color of colors) answerStatus[color][1](false);
        
        for(let color of colors){
            // horizontal
            for(let r=0;r<4;r++){
                let count=0;
                for(let c=0;c<4;c++){
                    if(!(color in answers)) continue;
                    if(answers[color].includes(grid[r][c])) count++;
                }
                if(count===4){
                    for(let c=0;c<4;c++) styles[r][c][1](color);
                    answerStatus[color][1](true);
                }
                if(count===3){
                    for(let c=0;c<4;c++){
                        if(answers[color].includes(grid[r][c])) highlights[r][c][1](true)
                    }
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
                        styles[r][c][1](color);
                        answerStatus[color][1](true);
                    }
                }
                if(count===3){
                    for(let r=0;r<4;r++){
                        if(answers[color].includes(grid[r][c])) highlights[r][c][1](true)
                    }
                }
            }
        }

        // return {almost: almost, finished: finished}
    }
    
    // check(grid);
    return(
        <>
            <div id='board'>
                {grid.map( (line,r) => {
                    return <div id='row' key={r}>
                        {line.map( (_,c) => {
                            return <div className={`tile ${styles[r][c][0]} ${highlights[r][c][0] ? 'highlight' : ''}`} key={c} id={[r,c]}
                            onPointerDown={selectOrigin} onPointerUp={selectDestination} onTouchMove={(e)=>e.preventDefault()}>
                                {grid[r][c]}
                            </div>
                        })}
                    </div>
                })}
            </div>
            <div id='progress'>
                <div id='groups-and-swaps'>
                    <span>Game Groups: {Object.values(answerStatus).filter((ele)=>ele[0]===true).length}/{colors.length}</span>
                    <span>Swaps: {swaps}</span>
                </div>

            </div>
        </>
    )
};


export default Board;