import React from 'react'
import './TicTac.css'

const TicTac= () =>{
    return(
        <div className='container'>
            <h1>Tic Tac Toe</h1>
            <div className='board'>
                <div className='row1'>
                    <div className='boxes'></div>
                    <div className='boxes'></div>
                    <div className='boxes'></div>
                </div>
                <div className='row2'>
                    <div className='boxes'></div>
                    <div className='boxes'></div>
                    <div className='boxes'></div>
                </div>
                <div className='row3'>
                    <div className='boxes'></div>
                    <div className='boxes'></div>
                    <div className='boxes'></div>
                </div>
            </div>
            <button className='btn'>Refresh</button>
        </div>
    )
}

export default TicTac