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
    
    const [origin,setOrigin] = useState(null)
    
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
        setOrigin(JSON.parse('['+e.target.id+']'));
    }
    
    function selectDestination(e){
        e.preventDefault();
        const destination = JSON.parse('['+e.target.id+']')
        swap(origin,destination);
    }
    
    function swap(orig,dest){
        if(!orig || (orig[0]===dest[0] && orig[1]===dest[1])){
            // do nothing
        } else {
            [grid[orig[0]][orig[1]],grid[dest[0]][dest[1]]] = [grid[dest[0]][dest[1]],grid[orig[0]][orig[1]]];
            
            check(grid);
            setSwaps(swaps+1)
        }
        // console.log(origin)
        setOrigin(null);
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
    
    // // dragging
    // const [position, setPosition] = useState({ x: 0, y: 0 })
    // const handleDrag = (e) => {
    //     e.preventDefault();
    //     // console.log(e)
    //     let data = {x: e.clientX,y: e.clientY}
    //     setPosition({ x: data.x, y: data.y }) 
    //     console.log(data.x,data.y)   
    // };


    return(
        <>
            <div id='board' >
                {grid.map( (line,r) => {
                    return <div id='row' key={r} >
                        {line.map( (_,c) => {
                            return <div className={`tile ${styles[r][c][0]} ${highlights[r][c][0] ? 'highlight' : ''}`} key={c} id={[r,c]}
                            onPointerDown={selectOrigin}
                            onPointerUp={selectDestination}
                            // draggable="true" 
                            // onDrag={handleDrag}
                            // onDragStart={selectOrigin}
                            style={ origin && origin[0]===r && origin[1]===c ? {transform: `scale(1.2)`, boxShadow: 'black 0px 5px 10px'} : {}}>
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
                <ol>
                    {Object.values(answerStatus).map(function(bool,i){
                        if(!bool[0]) return <li key={i}>?????</li>
                        else return <li className={colors[i]} key={i}>{Object.values(answers)[i][0]}</li>
                    })}
                </ol>
            </div>
        </>
    )
};


export default Board;