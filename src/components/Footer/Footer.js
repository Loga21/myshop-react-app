// importing fontawesome package
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// importing scss file
import './Footer.scss';
// importing menulist component
import MenuList from '../MenuList/MenuList';

// Fn comp with anonymous function
// comp can have js, jsx and css (optional)
function Footer() {
  // getting the year using date method
  const copyrightYear = new Date().getFullYear();
  const shopName = 'Spark Clothing';

  // must return jsx
  return (
    // creating the footer using bootstrap
    <nav className='navbar navbar-expand-md navbar-dark bg-dark mx-3'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse footer' id='navbarNav'>
          {/* incorporating the menulist component */}
          <MenuList />
          {/* incorporating the fontawesome icons */}
          <button className='font-buttons' data-testid='twitterIcon'>
            <FontAwesomeIcon icon='fa-brands fa-twitter' />
          </button>
          <button className='font-buttons' data-testid='instagramIcon'>
            <FontAwesomeIcon icon='fa-brands fa-instagram' />
          </button>
          <button className='font-buttons' data-testid='facebookIcon'>
            <FontAwesomeIcon icon='fa-brands fa-square-facebook' />
          </button>
          <button className='font-buttons' data-testid='whatsAppIcon'>
            <FontAwesomeIcon icon='fa-brands fa-whatsapp' />
          </button>
          {/* implementing the date and shopName */}
          <div data-testid='footerText' className='footer-text'>
            &copy; Copyright {copyrightYear} | {shopName}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
