// func comp with arrow func
import MenuItem from './MenuItem/MenuItem';
// importing menulist component
import './MenuList.scss';

// Fn comp with anonymous function
// comp can have js, jsx and css (optional)
const MenuList = () => {
  // creating an array of obj named menus
  const menus = [
    {
      id: 1,
      url: '/',
      navigation: 'Home'
    },
    {
      id: 2,
      url: '/products',
      navigation: 'Products'
    },
    {
      id: 3,
      url: '/about-us',
      navigation: 'About'
    },
    {
      id: 4,
      url: '/contact-us',
      navigation: 'Contact'
    }
  ];

  // must return JSX
  // to have className matcher test
  return (
    <ul className='navbar-nav me-auto mb-2 mb-d-0 menu-list' data-testid='menuList'>
      {/* mapping the menus array  */}
      {menus.map((menu) => {
        // passing the key and menu array to the child comp
        return <MenuItem key={menu.id} {...menu} />;
      })}
    </ul>
  );
};

export default MenuList;
