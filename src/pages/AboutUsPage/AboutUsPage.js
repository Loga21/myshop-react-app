import React from 'react';
// importing Link, Outlet package
import { Link, Outlet } from 'react-router-dom';
// importing scss file
import './AboutUsPage.scss';
// importing HelmetSetup component
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';

// Fn component with Named Fn
// comp can have js, jsx and css (optional)
const AboutUsPage = () => {
  // must return JSX
  return (
    <div className=''>
      {/* integrating helmet comp  */}
      <HelmetSetup title='About Us' />
      <div className='mt-3 pt-4'>
        <img
          src='../assets/images/about-us-img-2.png'
          alt='Spark Clothing'
          className='col-md-12 mt-2'
          height={200}
        />
      </div>
      {/* child routing starts here */}
      <div className='courses-nav my-3'>
        {/* Linking the child components */}
        <Link to='about-company' data-testid='aboutCompanyLink'>About Company</Link>
        <Link to='history' className='ms-4' data-testid='historyLink'>
          History
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutUsPage;
