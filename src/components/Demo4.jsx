import React, { Component } from 'react'

 class Demo4 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              employees:[
                  {
                      eid:1,
                      ename:'Prudhvi',
                      ecity:'Bangalore'
                  },
                  {
                    eid:2,
                    ename:'Praveen',
                    ecity:'Hyderabad'
                },
                {
                    eid:3,
                    ename:'Raj',
                    ecity:'Hyderabad'
                }
              ]
         }
     }
     
    render() {
        return (
            <div>
                <h3>Employee Details</h3>
                <hr/>
                <table className='table table-bordered table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Employee City</th>
                            <th></th>
                        </tr>
                    </thead>
                <tbody>
                {
                    this.state.employees.map(employee=>
                  
                       <tr>
                           <td>{employee.eid}</td>
                           <td>{employee.ename}</td>
                           <td>{employee.ecity}</td>
                           <td>
                               <button className='btn btn-danger'>Delete</button>&nbsp; | &nbsp;
                               <button className='btn btn-primary'>Edit</button>
                           </td>
                       </tr>
                  
                        )
                }
                </tbody>
                </table>
            </div>
        )
    }
}

export default Demo4
