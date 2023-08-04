import React from 'react';
// importing Link from package
import { Link } from 'react-router-dom';
// importing scss file
import './Carousel.scss';

// Fn component with Named Fn
// comp can have js, jsx and css (optional)
const Carousel = () => {
  // creating an array of obj named carousels
  const carousels = [
    {
      id: 1,
      title: 'Same Day Delivery',
      description:
        'Shop Trendy Stylish Designer Watches, clothes for Men, Women and Kids at great price, ✓ Free Delivery ✓ Free Returns ✓ COD. Buy now! Best Deals. Easy & Fast Delivery. Top Brands. Great Offers. Huge Selection.',
      backgroundImage: './assets/images/carousel-bg-img.jpg',
      carouselImage: './assets/images/carousel-img-3.webp',
      carouselText: 'Free Delivery',
      altText: 'Same Day Delivery'
    },
    {
      id: 2,
      title: 'Visit Now!',
      description:
        'Browse our range of clothing, shoes and accessories for women at outstanding prices. Find the best deals online or in-store. Online Sale - Get Attractive offers and discounts on Indian wear, Western wear and much more.',
      backgroundImage: './assets/images/carousel-bg-img.jpg',
      carouselImage: './assets/images/carousel-img-2.webp',
      carouselText: 'View offer',
      altText: 'Visit Now!'
    },
    {
      id: 3,
      title: 'Welcome to The Spark Clothing',
      description:
        'Spark is a one stop destination for your family fashion needs. We give you the opportunity to give your wardrobe a makeover with the latest collections from our top brands. Spark aims at ensuring nothing but the best for your closet.',
      backgroundImage: './assets/images/carousel-bg-img.jpg',
      carouselImage: './assets/images/carousel-img-1.webp',
      carouselText: 'Shop Now',
      altText: 'Welcome to The Spark Clothing'
    }
  ];

  // must return JSX
  return (
    // integrating the carousel using the bootstrap
    <div id='carouselExampleIndicators' className='carousel slide mt-5'>
      <div className='carousel-indicators'>
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to={0}
          className='active'
          aria-current='true'
          aria-label='Slide 1'
        />
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to={1}
          aria-label='Slide 2'
        />
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to={2}
          aria-label='Slide 3'
        />
      </div>
      <div className='carousel-inner'>
        {/* mapping the carousels array  */}
        {carousels.map((carousel) => {
          return (
            <div
              className='carousel-item active carousel'
              key={carousel.id}
              data-bs-interval={10000}>
              <img
                src={carousel.backgroundImage}
                height={300}
                className='d-block w-100'
                alt={carousel.title}
              />
              <div className='carousel-caption d-flex'>
                <div className='carousel-img'>
                  <img src={carousel.carouselImage} alt={carousel.altText} />
                </div>
                <div className='carousel-text'>
                  <h5>{carousel.title}</h5>
                  <p>{carousel.description}</p>
                  <Link to='/products' className='btn btn-danger'>
                    {carousel.carouselText}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleIndicators'
        data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true' />
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleIndicators'
        data-bs-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true' />
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
};

export default Carousel;
