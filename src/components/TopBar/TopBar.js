import './TopBar.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function TopBar(){

    return(
        <div className="bar">
            <FontAwesomeIcon className={'icon'} icon={icon({name: 'bars-staggered'})} />
            <FontAwesomeIcon className={'icon'} icon={icon({name: 'circle-question', style: 'regular'})} />

            <div className='title'>
                <p style={{color: '#6f7172'}}>GAME</p>
                <p style={{color: '#6ebf8b'}}>GRID</p>
            </div>

            <FontAwesomeIcon className={'icon'} icon={icon({name: 'house'})} />
            <FontAwesomeIcon className={'icon'} icon={icon({name: 'chart-simple'})} />
        </div>
    )
}

export default TopBar;