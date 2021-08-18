import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createStore } from "redux";

const reducer = (count = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return count +1;
      case "DECREMENT":
        return count  - 1;
        case "RESET":
        return count = 0;
      default: break
    }
    return count;
  };
  const increment = () => {
    return {
      type: "INCREMENT",
    };
  };
  const decrement = () => {
    return {
      type: "DECREMENT",
    };
  };
  const reset = () => {
    return {
      type: "RESET",
    };
  };
  
export const store = createStore(reducer);

function CouterR() {
    const count = useSelector((count) => count)
    const dispatch = useDispatch();
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl font-medium">Function component Redux</h1>
                <span className='text-8xl font-medium'>{count} </span>
                <div className="button-container">
                    <button className='m-2 py-1 px-3 border-c rounded box-s2 hover:black' onClick={()=> dispatch(decrement())  }>-</button>
                    <button className='m-2 py-1 px-3 border-c rounded box-s2 hover:black' onClick={()=> dispatch(reset())  }>RESET</button>
                    <button className='m-2 py-1 px-3 border-c rounded box-s2 hover:black' onClick={()=> dispatch(increment())  }>+</button>
                </div>
            </div>
        </div>
    )
}

export default CouterR
