import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';

const Login = () => {
  return (
    <div className='container-fluid align-items-center text-center min-vh-100 d-flex justify-content-center'>
    
        <h2>Login</h2>
        <p>Please enter your e-mail and password</p>
      
      <form className="col-sm-6">
        <div className="mb-3 row justify-content-center">
          <label htmlFor="inputEmail" className="col-sm-3 col-form-label">Email</label>
          <div className="col-sm-6">
            <input type="email" className="form-control" id="inputEmail" name="Email" placeholder='Email' />
          </div>
        </div>
        <div className="mb-3 row justify-content-center">
          <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Password</label>
          <div className="col-sm-6">
            <input type="password" className="form-control" id="inputPassword" placeholder='Password' />
          </div>
        </div>
        <div className='mb-3 row justify-content-center'>
          <div className='col-sm-6 d-flex justify-content-center'>
            <button className="btn btn-success" type="button">LOGIN</button>
          </div>
        </div>
        <div className='mb-3 row justify-content-center'>
          <p style={{ color: "grey" }}>Don't have an account? <span><Link to="/create">Create One</Link></span></p>
        </div>
      </form>
    </div>
  );
};

export default Login
