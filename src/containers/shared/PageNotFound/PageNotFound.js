import React from 'react';
// importing Link, Outlet package
import { Link, Outlet } from 'react-router-dom';
// importing HelmetSetup component
import HelmetSetup from '../../../components/HelmetSetup/HelmetSetup';

// Fn comp with anonymous function
// comp can have js, jsx and css (optional)
const PageNotFound = () => {
  // must return JSX
  return (
    <div className='text-center mt-5'>
      {/* integrating helmetSetup comp  */}
      <HelmetSetup title='404 - Page Not Found' />
      <h1>404 - Page Not Found</h1>
      <h5>Sorry, page not found</h5>
      <h4>
        Go back to
        <Link
          to='/'
          style={{
            textDecoration: 'none',
            color: 'green'
          }}>
          &nbsp;Home Page
        </Link>
      </h4>
      {/* Router-Outlet is from the router library that is used to insert the
      component matched by routes to be displayed on the screen */}
      <Outlet />
    </div>
  );
};

export default PageNotFound;
