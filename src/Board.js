import React, { useState } from 'react'
import Moves from './Moves'

export default function Board(){
    const [user, setUser] = useState(false)
    const [playerMoves, setPlayerMoves] = useState([Moves])

    // console.log(playerMoves)

    

    function handleMove(){
        if(user){
            document.getElementById('move').classList.add('show')
        } else {
            document.getElementById('move').classList.add('show')
        }
    }

    return(
        <div className="board-flex">
            <div>
                <ul>
                 {playerMoves.map(move => {
                     return(
                        <li key={move.square}>{move.player}</li>
                     )
                 })}
                </ul>
            </div>
            <div id="square" onClick={handleMove}>
                <span id="move" className="user-move">{user ? 'X' : '0'}</span>
            </div>
            <div id="square" onClick={handleMove}>
                <span id="move" className="user-move">{user ? 'X' : '0'}</span>
            </div>
            <div id="square" onClick={handleMove}>
                <span id="move" className="user-move">{user ? 'X' : '0'}</span>
            </div>
            <div id="square" onClick={handleMove}>
                <span id="move" className="user-move">{user ? 'X' : '0'}</span>
            </div>
            <div id="square" onClick={handleMove}>
                <span id="move" className="user-move">{user ? 'X' : '0'}</span>
            </div>
            <div id="square" onClick={handleMove}>
                <span id="move" className="user-move">{user ? 'X' : '0'}</span>
            </div>
            <div id="square" onClick={handleMove}>
                <span id="move" className="user-move">{user ? 'X' : '0'}</span>
            </div>
            <div id="square" onClick={handleMove}>
                <span id="move" className="user-move">{user ? 'X' : '0'}</span>
            </div>
            <div id="square" onClick={handleMove}>
                <span id="move" className="user-move">{user ? 'X' : '0'}</span>
            </div>
        </div>
    )
}