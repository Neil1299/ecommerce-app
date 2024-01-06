import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Login.css'

const Login = () => {
  return (


    <div className='container-fluid align-items-centerm text-center min-vh-100 justify-content-center'>
    <div className='py-5 text-center'>
    <h2 className=''>Login</h2>
        <p>Please enter your e-mail and password</p>
    </div>
    <form action="">
    <div class="mb-3 row justify-content-center">
    <label for="Email" class="col-sm-2 col-form-label"> Email</label>
    <div class="col-sm-3">
    <input type="email" class="form-control" id="inputPassword" name="Email" placeholder='Email'/>
    </div>
  </div>
  <div class="row mb-3 justify-content-center">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-3">
      <input type="password" class="form-control" id="inputPassword" placeholder='Password'/>
    </div>
   <div className='justify-content-center py-4 '>  <button className="btn btn-success " type="button">LOGIN </button></div>
  </div>
  <div>
<p style={{color:"grey"}}>Don't have an account? <span><Link to="/create">Create One</Link></span></p>
  </div>
    </form>
    </div>
  
  )
}

export default Login
