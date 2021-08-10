import React, { Component } from 'react'

class Demo2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:'Welcome To Capgemini'
        }
    }

    subscribe=()=>
    {
        this.setState(
            {
                msg:'Thank You For Subscription'
            }
        )
    }
    
    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                <button onClick={this.subscribe} className='btn btn-danger'>Subscribe</button>
            </div>
        )
    }
}

export default Demo2
