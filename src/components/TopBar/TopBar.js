import './TopBar.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function TopBar({oldTheme}){

    return(
        <div className="bar">
            <div className='left-icons'>
                <a href='/all-puzzles'>
                    <FontAwesomeIcon className={'icon'} icon={icon({name: 'bars-staggered'})} />
                </a>
                <a href='/how-to-play'>
                    <FontAwesomeIcon className={'icon'} icon={icon({name: 'circle-question', style: 'regular'})} />
                </a>
            </div>

            <div className='title'>
                <a href='/'>
                    <h1 style={{color: oldTheme ? '#6f7172' : '#6ebf8b'}}>GAME</h1>
                    <h1 style={{color: '#6ebf8b'}}>GRID</h1>
                </a>
            </div>

            <div className='right-icons'>
                <a href='/'>
                    <FontAwesomeIcon className={'icon'} icon={icon({name: 'house'})} />
                </a>
                <a href='https://www.cinenerdle2.app/'>
                    <FontAwesomeIcon className={'icon'} icon={icon({name: 'film'})} />
                </a>
            </div>
        </div>
    )
}

export default TopBar;