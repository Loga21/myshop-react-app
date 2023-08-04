import React from 'react';
// importing PropTypes package
import PropTypes from 'prop-types';
// importing helmet package
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Fn comp with anonymous function
// comp can have js, jsx and css (optional)
// destructuring the props
const HelmetSetup = ({ title }) => {
  // must return JSX
  return (
    <HelmetProvider>
      <Helmet>
        {/* receiving the title as prop  */}
        <title data-testid='title'>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
};

// validating the prop types
HelmetSetup.propTypes = {
  title: PropTypes.string
};

export default HelmetSetup;
