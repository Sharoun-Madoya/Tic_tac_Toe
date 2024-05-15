import React, { useState } from 'react'
import './TicTac.css'

let data = ["","","","","","","","",""]
const TicTac= () =>{
    let [count, setCount]= useState(0)
    let [Lock, setLock]= useState(false)
    const toogle = () =>{
        if (lock){
            return 0;
        }
        if (count%2 ===0){
            e.target.innerHTML= `<img src='${}'>`;
            data[num]="x";
            setCount(++count);
        }
        else{
            e.target.innerHTML=`<img src='${}'>`;
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