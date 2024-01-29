import React from 'react';
import { Link } from 'react-router-dom';

const OrganicMicrogreen = () => {
  return (
    <>
      <div className='container-fluid text-center justify-content-center min-vh-100'>
        <div className='my-5'>
          <div>
            <p>Collection Organic Microgreens & Basil is empty</p>
          </div>
          <div className='d-grid gap-2 col-lg-6 col-md-8 col-sm-10 mx-auto py-2'>
            <Link to="/">
              <button className='btn btn-success bg-success text-light'>
                BACK TO HOMEPAGE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganicMicrogreen;
