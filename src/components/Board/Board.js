import './Board.css';
import React from 'react';
import {useState} from 'react';
import _ from 'lodash';

function Board(props){
    // console.log('Rendering')
    
    const answers = props.answers;
    const grid=props.grid;
    
    const colors = Object.keys(answers);
    const answerStatus = {};
    for(let color of colors) answerStatus[color]=false;
    const [answerState,setAnswerState] = useState(answerStatus);
    
    const [swaps, setSwaps] = useState(0)
    const [origin,setOrigin] = useState(null)
    
    const defaultStyles = new Array(4).fill().map(()=>new Array(4).fill(null));
    const defaultHighlights = new Array(4).fill().map(()=>new Array(4).fill(false));
    const [styles,setStyles] = useState(defaultStyles);
    const [highlights,setHighlights] = useState(defaultHighlights);
    
    // moving tiles
    function selectOrigin(e){
        setOrigin(JSON.parse('['+e.target.id+']'));
    }
    function selectDestination(e){
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
        setOrigin(null);
    }
    
    function check(grid){        

        // deepcopy states so they can be updated
        const stylesCopy = _.cloneDeep(defaultStyles);
        const highlightsCopy = _.cloneDeep(defaultHighlights);
        const answerStateCopy = _.cloneDeep(answerStatus)
        
        for(let color of colors){
            // horizontal
            for(let r=0;r<4;r++){
                let count=0;
                for(let c=0;c<4;c++){
                    if(!(color in answers)) continue;
                    if(answers[color].includes(grid[r][c])) count++;
                }
                if(count===4){
                    for(let c=0;c<4;c++) stylesCopy[r][c]=color;
                    answerStateCopy[color]=true;
                }
                if(count===3){
                    for(let c=0;c<4;c++){
                        if(answers[color].includes(grid[r][c])) highlightsCopy[r][c] = true;
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
                        stylesCopy[r][c]=color;
                        answerStateCopy[color]=true;
                    }
                }
                if(count===3){
                    for(let r=0;r<4;r++){
                        if(answers[color].includes(grid[r][c])) highlightsCopy[r][c] = true;
                    }
                }
            }
            setHighlights(highlightsCopy);
            setStyles(stylesCopy);
            setAnswerState(answerStateCopy);
        }
    }
    
    function allowDrop(ev) {
        ev.preventDefault();
        ev.stopPropagation();
    }
    
    return(
        <>
            <div id='board'>
                {grid.map( (line,r) => {
                    return <div id='row' key={r} >
                        {line.map( (_,c) => {
                            return <div className={`tile ${styles[r][c]} ${highlights[r][c] ? 'highlight' : ''}`} key={c} id={[r,c]}
                            draggable='true'
                            onDragOver={allowDrop}
                            onDragStart={selectOrigin}
                            onDrop={selectDestination}
                            style={ origin && origin[0]===r && origin[1]===c ? {transform: `scale(1.2)`, boxShadow: 'black 0px 2px 8px', backgroundColor: 'yellow'} : {}}>
                                {grid[r][c]}
                            </div>
                        })}
                    </div>
                })}
            </div>
            <div id='progress'>
                <div id='groups-and-swaps'>
                    <span>Game Groups: {Object.values(answerState).filter((ele)=>ele===true).length}/{colors.length}</span>
                    <span>Swaps: {swaps}</span>
                </div>
                <ul>
                    {Object.values(answerState).map(function(bool,i){
                        if(!bool) return <li key={i}>?????</li>
                        else return <li className={colors[i]} key={i}>{Object.values(answers)[i][0]}</li>
                    })}
                </ul>
                {Object.values(answerState).filter((ele)=>ele===true).length===colors.length ? <p>Congratulations! You Grouped all the Games in the Grid! Try <a href={`/all-puzzles`}>ANOTHER</a>?</p> : ''}
            </div>
        </>
    )
};


export default Board;