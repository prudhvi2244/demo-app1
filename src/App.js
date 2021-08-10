import React  from "react"
function App(props)
{
  return(
    <div className="container ">
    <h1 className="text-primary">Welcome To React App</h1>
    <hr/>
    <h3>Employee ID :{props.eid}</h3>
    <h3>Employee Name :{props.ename}</h3>
    <h3>Employee City :{props.ecity}</h3>
    </div>
    )
}

export default App