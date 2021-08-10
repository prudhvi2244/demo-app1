import React, { Component } from 'react'

 class Demo5 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn:false,
              username:'Rajeev'
         }
     }
     

     handleFormSubmission=(e)=>
     {
        e.preventDefault()
        this.setState({isLoggedIn:true})
     }

     handleLogout=()=>
     {
        this.setState({isLoggedIn:false})
     }

    render() 
    {
       
        return (this.state.isLoggedIn)?
         
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Welcome {this.state.username}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cart</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Change Password</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a onClick={this.handleLogout} class="dropdown-item" >Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
     :   <div> 
                <h3>Login</h3>
                <hr/>
                <form method='post' onSubmit={this.handleFormSubmission}>
                <div className='form-group'>
                    <label>Username</label>
                    <input className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' className='form-control'/>
                </div>
                <button className='btn btn-primary mt-2'>Login</button>
                </form>
            </div>
            
        }
       
    }


export default Demo5
