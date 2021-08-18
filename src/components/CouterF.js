import React, { useState } from 'react'

function CouterF() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState({color:'black'})

    function increment() {
        setCount(count + 1)
        if(count > -1){
            setColor({color:'green'} )
        }
    }

    function decrement() {
        setCount(count - 1)
        if(count < 1){
            setColor( {color:'red'} )
        }
    }

    function reset() {
        setCount(count ? 0 : 0)
        if(count === 0){
            setColor( {color:'black'} )
        }
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl font-medium">Function Component</h1>
                <span className='text-8xl font-medium' style={{color:color.color}} >{count} </span>
                <div className="button-container">
                    <button className='m-2 py-1 px-3 border-c rounded box-s2 hover:black' onClick={decrement}>-</button>
                    <button className='m-2 py-1 px-3 border-c rounded box-s2 hover:black' onClick={reset}>RESET</button>
                    <button className='m-2 py-1 px-3 border-c rounded box-s2 hover:black' onClick={increment}>+</button>
                </div>
            </div>
        </>
    )
}

export default CouterF
