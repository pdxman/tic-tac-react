import React, { useState } from 'react'
// import Moves from './Moves'

export default function Board(){
    const Moves = [
        { square: 1, player: 'X', computer: 'O', empty: true },
        { square: 2, player: 'X', computer: 'O', empty: true },
        { square: 3, player: 'X', computer: 'O', empty: true },
        { square: 4, player: 'X', computer: 'O', empty: true },
        { square: 5, player: 'X', computer: 'O', empty: true },
        { square: 6, player: 'X', computer: 'O', empty: true }, 
        { square: 7, player: 'X', computer: 'O', empty: true },
        { square: 8, player: 'X', computer: 'O', empty: true },
        { square: 9, player: 'X', computer: 'O', empty: true }
    ]

    const [user, setUser] = useState(false)
    const [playerMoves, setPlayerMoves] = useState(Moves)


    console.log(playerMoves)
    
    function handleMove(){
        if(user){
            document.getElementById('move').classList.add('show')
        } else {
            document.getElementById('move').classList.add('show')
        }
    }

    function updateSquare() {
        setPlayerMoves([
            {...playerMoves[8],
            ...playerMoves[8],
            empty: false
        }])
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
                <ul className="board-flex">
                    {playerMoves.map(move => (
                            <li id="square" onClick={updateSquare} style={{color:'#fff' }} key={move.square}>
                                {move.player}, {move.computer}, {move.square}, {move.empty}
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    )
}