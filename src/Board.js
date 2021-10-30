import React from 'react'

export default function Board(){

    return(
        <div className="board-flex">
            <div className="square"><span className="play-piece eks">X</span></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"><span className="play-piece zero">0</span></div>
        </div>
    )
}