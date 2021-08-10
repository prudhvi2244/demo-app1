import React, { Component } from 'react'

export class Demo3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             colors:['Red','Green','Blue']
        }
    }
    
    render() {
        return (
            <div>
                <h3>Displaying Colors</h3>
                {/* <hr/>
                <h4>Color-1 : {this.state.colors[0]}</h4>
                <h4>Color-2 : {this.state.colors[1]}</h4>
                <h4>Color-3 : {this.state.colors[2]}</h4>
                <hr/> */}
               {
                   this.state.colors.map((color,index)=><h4>Color-{index}:{color}</h4>)
               }


            </div>
        )
    }
}

export default Demo3
