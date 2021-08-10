import React from 'react'
class Demo1 extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            eid:1,
            ename:'Raj',
            esalary:156000.2525,
            emails:['raj@gmail.com','prudhvi.spring@gmail.com']
        }
    }
   render()
   {
      return( 
      <div>
      <h2 className='text-info'>Welcome To Class Component</h2>
      <hr/>
      <h3>Employee Details</h3>
      <h4>Employee Id: {this.state.eid}</h4>
      <h4>Employee Name: {this.state.ename}</h4>
      <h4>Employee City: {this.state.esalary}</h4>
      <h4>Employee Email-1: {this.state.emails[0]}</h4>
      <h4>Employee Email-2: {this.state.emails[1]}</h4>
      </div>
      )
   
   }  

}

export default Demo1
