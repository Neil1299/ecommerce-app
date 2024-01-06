import React from 'react'

const CreateAccount = () => {
  return (
    <div className='container-fluid min-vh-100 justify-content-center text-center' >
 <h2 className='py-5'>Create Account</h2>
    
        
        <form action="">
        <div class="mb-3 row justify-content-center">
    <label for="Name" class="col-sm-2 col-form-label"> Name</label>
    <div class="col-sm-3 justify-content-center">
    <input type="text" class="form-control" id="inputPassword" name="Name" placeholder='Enter First Name'/>
    </div>
  </div>

  <div class="mb-3 row justify-content-center">
    <label for="LastName" class="col-sm-2 col-form-label"> Surname</label>
    <div class="col-sm-3">
    <input type="text" class="form-control" id="inputPassword" name="LastName" placeholder='Enter Last Name'/>
    </div>
    </div>

    <div class="mb-3 row justify-content-center">
    <label for="Email" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-3">
    <input type="email" class="form-control" id="inputPassword" name="Email" placeholder='Enter Your email Address'/>
    </div>
    </div>

    <div class="mb-3 row justify-content-center">
    <label for="pass" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-3">
    <input type="password" class="form-control" id="inputPassword" name="pass" placeholder='Enter Your Password'/>
    </div>
    </div>
      
    <div className='justify-content-center py-4 '>  <button className="btn btn-success " type="button">CREATE MY ACCOUNT</button></div>
  
        </form>
      </div>
   
  )
}

export default CreateAccount
