import React, { useState } from 'react'
import './TicTac.css'
import cross_icon from "../assets/X1 tictac.png"
import circle_icon from "../assets/O1 tictac.png"


let data = ["","","","","","","","",""]
const TicTac= () =>{
    let [count, setCount]= useState(0)
    let [lock, setLock]= useState(false)
    const toogle = (e, num) =>{
        if (lock){
            return 0;
        }
        if (count%2 ===0){
            e.target.innerHTML= `<img src='${cross_icon}'>`;
            data[num]="x";
            setCount(++count);
        }
        else{
            e.target.innerHTML=`<img src='${circle_icon}'>`;
            data[num]= "o";
            setCount(++count);
        }
    }
    return(
        <div className='container'>
            <h1>Tic Tac Toe</h1>
            <div className='board'>
                <div className='row1'>
                    <div className='boxes' onClick={(e)=>{toogle(e, 0)}}></div>
                    <div className='boxes' onClick={(e)=>{toogle(e, 1)}}></div>
                    <div className='boxes' onClick={(e)=>{toogle(e, 2)}}></div>
                </div>
                <div className='row2'>
                    <div className='boxes' onClick={(e)=>{toogle(e, 3)}}></div>
                    <div className='boxes' onClick={(e)=>{toogle(e, 4)}}></div>
                    <div className='boxes' onClick={(e)=>{toogle(e, 5)}}></div>
                </div>
                <div className='row3'>
                    <div className='boxes' onClick={(e)=>{toogle(e, 6)}}></div>
                    <div className='boxes' onClick={(e)=>{toogle(e, 7)}}></div>
                    <div className='boxes' onClick={(e)=>{toogle(e, 8)}}></div>
                </div>
            </div>
            <button className='btn'>Refresh</button>
        </div>
    )
}

export default TicTac