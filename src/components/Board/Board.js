import './Board.css';
import React, { useEffect } from 'react';
import {useState} from 'react';
import _ from 'lodash';
import share from './share.png'


function Board({answers, grid, id, oldSwaps}){   
    const colors = Object.keys(answers);
    const answerStatus = {};
    for(let color of colors) answerStatus[color]=false;
    const [answerState,setAnswerState] = useState(answerStatus);
    
    const [swaps, setSwaps] = useState(oldSwaps ? oldSwaps + 1 : 0)
    const [origin, setOrigin] = useState(null)
    const [won, setWon] = useState(false)
    
    const defaultStyles = new Array(4).fill().map(()=>new Array(4).fill(null));
    const defaultHighlights = new Array(4).fill().map(()=>new Array(4).fill(false));
    const [styles,setStyles] = useState(defaultStyles);
    const [highlights,setHighlights] = useState(defaultHighlights);

    useEffect(() => {
        check(grid);
    }, [])
    
    // moving tiles
    function selectOrigin(e){
        setOrigin(JSON.parse('['+e.target.id+']'));
    }
    function selectDestination(e){
        let destination;
        if(e.changedTouches){
            // get the element id from the touch x and y 
            let target = document.elementFromPoint(e.changedTouches[0].clientX,e.changedTouches[0].clientY);
            if(!target || !target.id || target.id==='row') return

            destination = JSON.parse('['+target.id+']');
        } else {
            destination = JSON.parse('['+e.target.id+']');
        }
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
        let matches=0;

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
                    matches++;
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
                    matches++;
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
        if(matches===colors.length){
            setWon(true);
            saveState(true);
            setTimeout(()=>window.scrollTo(0, document.body.scrollHeight),'500');
        } else {
            saveState(false);
        }

    }
    
    function allowDrop(ev) {
        ev.preventDefault();
    }

    const emojis={red: '🟥', blue: '🟦', purple: '🟪', orange: '🟧', green: '🟩'}
    const [shared, setShared] = useState(false);
    
    function shareToClipboard(){
        let clipboard = `I finished Game Grid #${id}!\n`;
        for(let r=0;r<4;r++){
            for(let c=0;c<4;c++){
                clipboard+=emojis[styles[r][c]];
            }
            clipboard+='\n'
        }
        clipboard+=`I found all ${colors.length} Game Groups in just ${swaps} swaps! 😝\n`;
        clipboard+=`Want to try it out for yourself?\nhttps://game-grid.onrender.com/puzzles/${id}`;

        navigator.clipboard.writeText(clipboard);
        setShared(true);
    }

    const state = {
        grid, 
        swaps
    }

    const saveState = (won) => {
        localStorage.setItem('gamegrid' + id, JSON.stringify({...state, won}));
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

                            onTouchStart={selectOrigin}
                            onTouchEnd={selectDestination}
                            onPointerEnter={allowDrop}

                            style={ origin && origin[0]===r && origin[1]===c ? {transform: `scale(1.2)`,  backgroundColor: 'yellow'} : {}}>
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
            </div>
            {won ? <div id='share'>
                <h3>GG! You Grouped all the Games in the Grid! Try <a href={`/all-puzzles`}>ANOTHER PUZZLE</a>? </h3>
                <h1 onClick={shareToClipboard}><img src={share} alt='share' height='20px'/> {shared ? 'Copied to Clipboard' : 'Share Your Results?'}</h1>
            </div> : ''}
        </>
    )
};


export default Board;