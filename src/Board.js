import React, { useState } from 'react'
import Moves from './Moves'

export default function Board(){

    // const [user, setUser] = useState(false)
    // const [playerMoves, setPlayerMoves] = useState(Moves)
    const [squares, setSquares] = useState(Array(9).fill(null))

    // function handleClick(){
    //     if(user){
    //         document.getElementById('move').classList.add('show')
    //     } else {
    //         document.getElementById('move').classList.add('show')
    //     }
    // }

    // function updateSquare() {
    //     setPlayerMoves([
    //         {...playerMoves[8],
    //         ...playerMoves[8],
    //         empty: false
    //     }])
    // }

    function handleClick(i) {
        let newSquares = squares
        newSquares[i] = 'X';
        setSquares(newSquares)
        console.log(newSquares)
      }

    return(
        <div className="board-flex">
           <div id="square" onClick={() => handleClick(1)}>
                <span id="move" className="user-move"></span>
            </div>
            <div id="square" onClick={() => handleClick(2)}>
                <span id="move" className="user-move"></span>
            </div>
            <div id="square" onClick={() => handleClick(3)}>
                <span id="move" className="user-move"></span>
            </div>
            <div id="square" onClick={() => handleClick(4)}>
                <span id="move" className="user-move"></span>
            </div>
            <div id="square" onClick={() => handleClick(5)}>
                <span id="move" className="user-move"></span>
            </div>
            <div id="square" onClick={() => handleClick(6)}>
                <span id="move" className="user-move"></span>
            </div>
            <div id="square" onClick={() => handleClick(7)}>
                <span id="move" className="user-move"></span>
            </div>
            <div id="square" onClick={() => handleClick(8)}>
                <span id="move" className="user-move"></span>
            </div>
            <div id="square" onClick={() => handleClick(9)}>
                <span id="move" className="user-move"></span>
            </div>
            {/* <div>
                <ul className="board-flex">
                    {playerMoves.map(move => (
                            <li id="square" onClick={handleClick} style={{color:'#fff' }} >
                                {move.player}, {move.computer}, {move.square}, {move.empty}
                            </li>
                        )
                    )}
                </ul>
            </div> */}
        </div>
    )
}