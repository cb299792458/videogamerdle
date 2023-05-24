import './Board.css'
import {useState} from 'react'

function Board(props){
    console.log('Rerendered')
    const [swaps, setSwaps] = useState(0)
    let board = props.problem;
    let grid = board.grid;
    
    let origin = null;
    
    function selectOrigin(e){
        e.preventDefault();
        // console.log(e.target.id)
        origin = e.target.id
    }
    
    function selectDestination(e){
        e.preventDefault();
        // console.log(e.target.id)
        swap(origin,e.target.id);
    }
    
    function swap(orig,dest){
        if(orig[0]===dest[0] && orig[1]===dest[1]){
            origin=null;
            return;
        } else {
            [grid[orig[0]][orig[1]],grid[dest[0]][dest[1]]] = [grid[dest[0]][dest[1]],grid[orig[0]][orig[1]]];
            setSwaps(swaps+1)
            origin=null;
        }
        // console.log('swapped')
    }

    return(
        <>
            <div id='board'>
                {grid.map( (line,r) => {
                    return <div id='row' key={r}>
                        {line.map( (tile,c) => {
                            return <div className='tile' key={c} id={[r,c]} onMouseDown={selectOrigin} onMouseUp={selectDestination}>
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