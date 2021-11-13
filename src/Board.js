import React, { useState } from 'react'
import Moves from './Moves'

export default function Board(){
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [player, setPlayer] = useState('X')

    const getNextPlayer = (player) => {
        return player === 'X' ? setPlayer('0') : setPlayer('X')
    }

    function handleClick(i, player) {
        let newSquares = squares
        newSquares[i] = player;
        setSquares(newSquares)
        getNextPlayer(player)
    }

    

    return(
        <div className="board-flex">
           <div className="square" onClick={() => handleClick(0, player)}>
                <span id="move" className="user-move">{squares[0]}</span>
            </div>
            <div className="square" onClick={() => handleClick(1, player)}>
                <span id="move" className="user-move">{squares[1]}</span>
            </div>
            <div className="square" onClick={() => handleClick(2, player)}>
                <span id="move" className="user-move">{squares[2]}</span>
            </div>
            <div className="square" onClick={() => handleClick(3, player)}>
                <span id="move" className="user-move">{squares[3]}</span>
            </div>
            <div className="square" onClick={() => handleClick(4, player)}>
                <span id="move" className="user-move">{squares[4]}</span>
            </div>
            <div className="square" onClick={() => handleClick(5, player)}>
                <span id="move" className="user-move">{squares[5]}</span>
            </div>
            <div className="square" onClick={() => handleClick(6, player)}>
                <span id="move" className="user-move">{squares[6]}</span>
            </div>
            <div className="square" onClick={() => handleClick(7, player)}>
                <span id="move" className="user-move">{squares[7]}</span>
            </div>
            <div className="square" onClick={() => handleClick(8, player)}>
                <span id="move" className="user-move">{squares[8]}</span>
            </div>
        </div>
    )
}