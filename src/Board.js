import React, { useState, useEffect } from 'react'

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState('X')
  const [disabled, setDisabled] = useState(false)
  const [winner, setWinner] = useState('')

  useEffect(() => {
    console.log(squares)
    console.log(`disabled: ${disabled}`)
    isWinner()
  }, [squares, disabled])

  const CurrentPlayer = () => {
    return <div>Current Player: {player}</div>
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null))
    setPlayer('X')
  }

  const ResetGame = () => {
    setDisabled(false)
    return (
      <div>
        <button onClick={() => resetGame()}>Reset</button>
      </div>
    )
  }

  const getNextPlayer = (player) => {
    return player === 'X' ? setPlayer('O') : setPlayer('X')
  }

  function handleClick(i, player) {
    if (squares[i] === null) {
      let newSquares = squares
      newSquares[i] = player
      setSquares(newSquares)
      getNextPlayer(player)
      isWinner()
    }
    console.log(squares)
  }

  const isWinner = () => {
    if(squares[0], squares[1], squares[2] === "X" ){
        setDisabled(true)
        setWinner("X wins! Excellent!")
        return <div>Winner</div>
    } else if(squares[0], squares[1], squares[2] === "O" ){
        setDisabled(true)
        setWinner("0 wins! Excellent!")
        return <div>Winner</div>
    } else if(squares[3], squares[4], squares[5] === "X" ){
      setDisabled(true)
      setWinner("X wins! Excellent!")
      return <div>Winner</div>
    } else if(squares[3], squares[4], squares[5] === "O" ){
      setDisabled(true)
      setWinner("0 wins! Excellent!")
      return <div>Winner</div>
    } else if(squares[6], squares[7], squares[8] === "X" ){
      setDisabled(true)
      setWinner("X wins! Excellent!")
      return <div>Winner</div>
    } else if(squares[6], squares[8], squares[8] === "O" ){
      setDisabled(true)
      setWinner("0 wins! Excellent!")
      return <div>Winner</div>
    } else if(squares[0], squares[4], squares[8] === "X" ){
      setDisabled(true)
      setWinner("X wins! Excellent!")
      return <div>Winner</div>
    } else if(squares[0], squares[4], squares[8] === "O" ){
      setDisabled(true)
      setWinner("0 wins! Excellent!")
      return <div>Winner</div>
    }
    
  }

  const renderSquare = (i, player) => {
    return (
      <div
        className='square'
        disabled={disabled}
        onClick={() => handleClick(i, player)}>
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
      <p>Winner: {winner}</p>
    </div>
  )
}

