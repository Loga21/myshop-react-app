// importing fontawesome package
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// importing menulist component
import MenuList from '../MenuList/MenuList';
// importing scss file
import './Header.scss';

// Fn component with Named Fn
// comp can have js, jsx and css (optional)
function Header() {
  // must return JSX
  return (
    // creating the header using bootstrap
    <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark mx-3'>
      <div className='container-fluid'>
        {/* integrating the header logo  */}
        <img src='./assets/images/logo-img.png' className='ms-2 navbar-img' />
        {/* name of the cloth shop comes here */}
        <Link data-testid='companyName' className='navbar-brand' to='/'>
          Spark Clothing
        </Link>
        <div className='collapse navbar-collapse nav-header' id='navbarSupportedContent'>
          {/* header search bar and search button comes here  */}
          <form className='d-flex col-md-6' role='search'>
            <input
              className='form-control me-2 search-bar'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-secondary' type='submit' data-testid='searchIcon'>
              <FontAwesomeIcon icon='fa-solid fa-magnifying-glass' />
            </button>
          </form>
          {/* incorporating the menulist component */}
          <MenuList />
        </div>
      </div>
    </nav>
  );
}

export default Header;
