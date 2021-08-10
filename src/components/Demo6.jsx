import React, { Component } from 'react'

export class Demo6 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products:[]
        }
    }
    
    render() {

       return this.state.products.length==0 && <h3 className='text-danger'>No Products Available</h3>
    
    }
}

export default Demo6
