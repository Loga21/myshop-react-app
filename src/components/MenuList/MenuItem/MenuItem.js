// importing NavLink package
import { NavLink } from 'react-router-dom';
// importing PropTypes package
import PropTypes from 'prop-types';

// Fn component with Named Fn
// comp can have js, jsx and css (optional)
// receiving the props
const MenuItem = ({ url, navigation }) => {
  // must return JSX
  // console.log(props)
  return (
    <li className='nav-item'>
      <NavLink data-testid='url' className='nav-link' aria-current='page' to={url}>
        {navigation} &nbsp;|
      </NavLink>
    </li>
  );
};

// validating the prop types
MenuItem.propTypes = {
  navigation: PropTypes.string,
  url: PropTypes.string
};

export default MenuItem;
