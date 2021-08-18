import React, { Component } from 'react'

class CouterC extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            color:'black'
        };

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
        
        if(this.state.count > -1){
            this.setState({
                color: 'green'
            })
        }
    }

    decrement(){
        this.setState({
            count: this.state.count - 1
        })

        if(this.state.count < 1){
            this.setState({
                color: 'red'
            })
        }
    }

    reset() {
        this.setState({
            count: 0
        })
        if(this.state.count === 0){
            this.setState({
                color: 'black'
            })
        }
    }


    render() {
        return (
            <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl font-medium">Class Component</h1>
                <span className='text-8xl font-medium' style={{color:this.state.color}}>{this.state.count} </span>
                <div className="button-container">
                    <button className='m-2 py-1 px-3 border-c rounded box-s2 hover:black' onClick={this.decrement}>-</button>
                    <button className='m-2 py-1 px-3 border-c rounded box-s2 hover:black' onClick={this.reset}>RESET</button>
                    <button className='m-2 py-1 px-3 border-c rounded box-s2 hover:black' onClick={this.increment}>+</button>
                </div>
            </div>
            </>
        )
    }
}

export default CouterC
