import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h1 className="text-base text-red-700 font-semibold text-center h-8 p-3">COUNTER APP</h1>
            <div className="container mx-auto px-4 flex justify-center   items-center">
                <Link to='/class-component' className="w-1/5 h-48 m-8 p-3 flex justify-center items-center text-center box-s1">Class component</Link>
                <Link to='/function-component' className="w-1/5 h-48 m-8 p-3 flex justify-center items-center text-center  box-s1">Function component</Link>
                <Link to='/useRedux' className="w-1/5 h-48 m-8 p-3 flex justify-center items-center text-center box-s1">Function component Redux</Link>
                <Link to='/immerjs' className="w-1/5 h-48 m-8 p-3 flex justify-center items-center text-center box-s1">Function component Immerjs</Link>


            </div>
        </>
    )
}

export default Home
