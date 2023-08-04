// importing useEffect, useState hooks
import React, { useEffect, useState } from 'react';
// importing Link package
import { Link } from 'react-router-dom';
// importing fetchApi component
import { fetchApi } from '../../../utils/fetchApi';
// importing scss file
import './LatestProducts.scss';

// Fn comp with anonymous function
// comp can have js, jsx and css (optional)
const LatestProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // aft the initial rendering this callback fn wll be called
    // whats the API URL? https://jsonplaceholder.typicode.com/users
    // whats the REST API Client Tool? fetch
    // Whats the http Method? GET
    fetchApi(
      'http://localhost:5000/products?bestSellerRanking=1&bestSellerRanking=2&bestSellerRanking=3',
      'GET'
    )
      .then((resInJson) => {
        // capturing converted JSON res.
        console.log(resInJson);
        if (resInJson.statusCode !== 404) {
          setProducts(resInJson);
          setIsError(false);
        } else {
          setProducts([]);
          setIsError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className='spinner-border text-success'></div>;
  }

  if (isError) {
    return <div className='alert-alert-danger' data-testid='errorMsg'>Some Error Occurred. Try again later.</div>;
  }

  // must return JSX
  return (
    <div className='row my-3 mx-0 latest-products-container'>
      <h2 className='text-light mb-4 mt-3'>Latest Products</h2>
      {/* mapping the products array */}
      {products?.map((product) => {
        const sellingPrice = product.maxRetailPrice * (product.discountApplicable / 100);
        const finalSellingPrice = Math.round(product.maxRetailPrice - sellingPrice);
        return (
          <div className='col-md-4 mb-2 products' key={product.id}>
            <div className='card mb-3 p-2 rounded-3 product-card'>
              {/* product thumbnailUrl and url */}
              <img
                src={product.thumbnailUrl}
                className='card-img-top'
                alt={product.imgAltText}
                height={200}
              />
              {/* product name, maxRetailPrice, discountApplicable and finalSellingPrice */}
              <div className='card-body'>
                <h4 className='card-title mb-2'>{product.name}</h4>
                <s className='card-text'>₹{product.maxRetailPrice}</s>
                <span className=' product-discount fs-6'>
                  ({product.discountApplicable}% Offer)
                </span>
                <p className='card-text  fs-4'>₹{finalSellingPrice}</p>
                <Link to='/products' className='btn btn-primary card-btn'>
                  Add to cart
                </Link>
              </div>
            </div>
          </div>
        );
      })}
      <div className='text-center'>
        <Link type='button' to='/products' className='btn btn-dark mb-4'>
          View All
        </Link>
      </div>
    </div>
  );
};

export default LatestProducts;
