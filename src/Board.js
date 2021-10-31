import React, { useState } from 'react'
// import Moves from './Moves'

export default function Board(){
    const [user, setUser] = useState(false)
    // const [playerMoves, setPlayerMoves] = useState([Moves])

    // console.log(playerMoves)

    const Moves = [
        { square: 1, player: 'X', computer: 'O', empty: null },
        { square: 2, player: 'X', computer: 'O', empty: null },
        { square: 3, player: 'X', computer: 'O', empty: null },
        { square: 4, player: 'X', computer: 'O', empty: null },
        { square: 5, player: 'X', computer: 'O', empty: null },
        { square: 6, player: 'X', computer: 'O', empty: null }, 
        { square: 7, player: 'X', computer: 'O', empty: null },
        { square: 8, player: 'X', computer: 'O', empty: null },
        { square: 9, player: 'X', computer: 'O', empty: null }
    ]

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
            <div>
                <ul>
                 {Moves.map(move => (
                        <li style={{color:'#fff' }} key={move.square}>
                            {move.player}, {move.computer}, {move.square}
                        </li>
                     )
                 )}
                </ul>
            </div>
        </div>
    )
}