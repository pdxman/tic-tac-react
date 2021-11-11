import React, { useState, useEffect } from 'react'
import Moves from './Moves'

export default function Board() {
  // const [user, setUser] = useState(false)
  // const [playerMoves, setPlayerMoves] = useState(Moves)
  const [squares, setSquares] = useState(Array(9).fill(null))

  useEffect(() => {
    console.log(squares)
  }, [squares])

  const CurrentPlayer = () => {
    return <div>Current Player: {player}</div>
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null))
    setPlayer('X')
  }

  const ResetGame = () => {
    return (
      <div>
        <button onClick={() => resetGame()}>Reset</button>
      </div>
    )
  }

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

  const [player, setPlayer] = useState('X')

  const getNextPlayer = (player) => {
    return player === 'X' ? setPlayer('O') : setPlayer('X')
  }

  function handleClick(i, player) {
    if (squares[i] === null) {
      let newSquares = squares
      newSquares[i] = player
      setSquares(newSquares)
      getNextPlayer(player)
    }
    console.log(squares)
  }

  const renderSquare = (i, player) => {
    return (
      <div className='square' onClick={() => handleClick(i, player)}>
        {squares[i]}
      </div>
    )
  }

  return (
    <div>
      <ResetGame />
      <CurrentPlayer player={player} />
      <div className='board-flex'>
        {renderSquare(0, player)}
        {renderSquare(1, player)}
        {renderSquare(2, player)}
        {renderSquare(3, player)}
        {renderSquare(4, player)}
        {renderSquare(5, player)}
        {renderSquare(6, player)}
        {renderSquare(7, player)}
        {renderSquare(8, player)}
        {/* <div className='square' onClick={() => handleClick(0, player)}>
          {squares[0]}
        </div>
        <div className='square' onClick={() => handleClick(1, player)}>
          {squares[1]}
        </div>
        <div className='square' onClick={() => handleClick(2, player)}>
          {squares[2]}
        </div>
        <div className='square' onClick={() => handleClick(3, player)}>
          <span id='move' className='user-move'></span>
        </div>
        <div className='square' onClick={() => handleClick(4, player)}>
          <span id='move' className='user-move'></span>
        </div>
        <div className='square' onClick={() => handleClick(5, player)}>
          <span id='move' className='user-move'></span>
        </div>
        <div className='square' onClick={() => handleClick(6, player)}>
          <span id='move' className='user-move'></span>
        </div>
        <div className='square' onClick={() => handleClick(7, player)}>
          <span id='move' className='user-move'></span>
        </div>
        <div className='square' onClick={() => handleClick(8, player)}>
          <span id='move' className='user-move'></span>
        </div> */}
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
