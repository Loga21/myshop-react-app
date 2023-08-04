import React from 'react';
// importing Carousel component
import Carousel from './Carousel/Carousel';
// importing LatestProducts component
import LatestProducts from './LatestProducts/LatestProducts';
// importing fontawesome package
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// importing scss file
import './HomePage.scss';
// importing HelmetSetup component
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';

// Fn component with Named Fn
// comp can have js, jsx and css (optional)
const HomePage = () => {
  // creating an array of obj named menus
  const policies = [
    {
      id: 1,
      title: 'FREE SHIPPING & RETURN',
      desc: 'Free shipping on all orders over RS.499',
      icon: <FontAwesomeIcon icon='fa-solid fa-truck' />
    },
    {
      id: 2,
      title: 'MONEY BACK GUARANTEE',
      desc: '100% money back guarantee',
      icon: <FontAwesomeIcon icon='fa-solid fa-dollar-sign' />
    },
    {
      id: 3,
      title: 'ONLINE SUPPORT 24/7',
      desc: 'Reach us out at anytime',
      icon: <FontAwesomeIcon icon='fa-solid fa-headset' />
    }
  ];

  // must return JSX
  return (
    <>
      {/* integrating helmetSetup comp  */}
      <HelmetSetup title='Home' />
      {/* integrating Carousel comp  */}
      <Carousel />
      {/* integrating LatestProducts comp  */}
      <LatestProducts />
      <div className='row mb-3 mx-0 policy-container'>
        {/* mapping the policies array */}
        {policies.map((policy) => {
          return (
            <div className='col-md-4' key={policy.id}>
              <div className='card policy-card'>
                <div className='card-body d-flex policy-body'>
                  <div className='policy-icon'>{policy.icon}</div>
                  <div className='policy-text'>
                    <h6 className='card-title'>{policy.title}</h6>
                    <p className='card-text'>{policy.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
