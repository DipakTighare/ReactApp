import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
<>
<div className='container mt-5'>
    <h1 className='text-danger mb-5'>404 Page not found</h1>
    <NavLink className='btn btn-info' to ="/" > Back to Home </NavLink>
</div>
</>
  )
}

export default Error