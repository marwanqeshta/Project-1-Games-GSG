import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { PATHS } from '../../router/pathes';

const NotFound = () => {
  return (
    <div className='container'>
      <h1 className='error-1'>404</h1>
      <p className='error-2'>Oops! Page not found</p>
      <p>
        Go back to{' '}
        <Link to={PATHS.HOME} className='back'>
          home
        </Link>
        .
      </p>
    </div>
  );
};

export default NotFound;
