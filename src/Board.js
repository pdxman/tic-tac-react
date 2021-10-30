import React, { useState } from 'react'

export default function Board(){
    const [user, setUser] = useState(false)

    function handleMove(){
        if(user){
            document.getElementById('move').classList.add('show')
        } else {
            document.getElementById('move').classList.add('show')
        }
    }

    return(
        <div className="board-flex">
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