import React, { Component } from 'react'

class Demo8 extends Component {
    constructor(props) {
        super(props)
    
        this.state = 
        {
             cid:1,
             cname:'Praveen',
             city:'Bangalore'
        }
    }
    
    render() {

        let {cid,cname,city}=this.state

        return(
            <div>
                <h3>Customer Details</h3>
                <hr/>
                <h4>Customer ID : {cid}</h4>
                <h4>Customer Name : {cname}</h4>
                <h4>Customer City : {city}</h4>
            </div>
        )
    }
}

export default Demo8
