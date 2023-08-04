// importing useEffect, useState hook
import { useEffect, useState } from 'react';
// importing Link, useLocation package
import { Link, useLocation } from 'react-router-dom';
// importing HelmetSetup  component
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';
// importing fetchApi component
import { fetchApi } from '../../utils/fetchApi';
// import Product from './Product/Product';
import './ProductsPage.scss';

// Fn comp with anonymous function
// comp can have js, jsx and css (optional)
const ProductsPage = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);
  const [products, setProducts] = useState([]);
  const [isSorted, setIsSorted] = useState(true);
  // const [currentLocation, setCurrentLocation] = useState('');
  const [priceSorting, setPriceSorting] = useState('Sort By');

  useEffect(() => {
    console.log(location);
    // setCurrentLocation(window.location.href);
    // console.log(currentLocation.slice(30, 1));
    fetchApi(`http://localhost:5000/products${location.search}`, 'GET')
      .then((resInJson) => {
        // capturing converted JSON res.
        console.log(resInJson);
        if (resInJson.statusCode !== 404) {
          setProducts(resInJson);
          setIsSorted(resInJson);
          setIsError(false);
        } else {
          setProducts([]);
          setIsSorted([]);
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
    console.log(isSorted);
  }, [location]);

  if (isLoading) {
    return <div className='spinner-border text-success'></div>;
  }

  if (isError) {
    return <div className='alert-alert-danger'>Some Error Occurred. Try again later.</div>;
  }

  // creating an array of obj named categories
  const categories = [
    {
      id: 1,
      linkTo: '/products',
      category: 'All'
    },
    {
      id: 2,
      linkTo: '?category=Men',
      category: 'Men'
    },
    {
      id: 3,
      linkTo: '?category=Women',
      category: 'Women'
    },
    {
      id: 4,
      linkTo: '?category=Kids',
      category: 'Kids'
    }
  ];

  // must return JSX
  return (
    <div className='d-flex'>
      {/* integrating helmetSetup comp  */}
      <HelmetSetup title='Products' />
      {/* integrating sidebar using bootstrap */}
      <div
        className='d-flex flex-column flex-shrink-0 text-white bg-dark mt-5'
        style={{ width: 260 }}>
        <p className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none'>
          <svg className='bi me-2' width={40} height={32}>
            <use xlinkHref='#bootstrap' />
          </svg>
          <span className='fs-4'>Products</span>
        </p>
        <p className='ms-5 mt-2 mb-0'>Categories</p>
        <hr />
        <ul className='nav flex-column mb-auto'>
          {/* mapping the categories array  */}
          {categories.map((category) => {
            return (
              <li className='nav-item' key={category.id}>
                <Link
                  to={category.linkTo}
                  className='nav-link text-white category-link'
                  aria-current='page'>
                  <svg className='bi me-2' width={16} height={16}>
                    <use xlinkHref='#home' />
                  </svg>
                  {category.category}
                </Link>
              </li>
            );
          })}
        </ul>
        <hr />
      </div>

      <div>
        <div className='d-flex ms-5 mt-5'>
          <div className='product-count'>
            <h4 className='mt-2 col-0 text-secondary'>{products.length} Products Found</h4>
          </div>
          <div className='btn-group mb-3 sortby'>
            <button
              className='btn btn-dark dropdown-toggle'
              type='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
              >
              {priceSorting}
            </button>
            <ul className='dropdown-menu'>
              <li>
                <Link
                  className='dropdown-item'
                  to='?_sort=maxRetailPrice&_order=asc'
                  onClick={() => setPriceSorting('Price - Low to High')}>
                  Price - Low to High
                </Link>
              </li>
              <li>
                <Link
                  className='dropdown-item'
                  to='?_sort=maxRetailPrice&_order=desc'
                  onClick={() => setPriceSorting('Price - High to Low')}>
                  Price - High to Low
                </Link>
              </li>
            </ul>
          </div>
          {/* </div> */}
        </div>
        {/* <Outlet /> */}
        <div className='ms-2 row product-cards'>
          {/* mapping the products array  */}
          {products?.map((product) => {
            const sellingPrice = product.maxRetailPrice * (product.discountApplicable / 100);
            const finalSellingPrice = Math.round(product.maxRetailPrice - sellingPrice);
            return (
              <div className='col-md-4' key={product.id}>
                <div className='card p-2 shadow mb-4 bg-body-tertiary rounded'>
                  <img
                    src={product.thumbnailUrl}
                    className='card-img-top'
                    alt={product.imgAltText}
                    height={200}
                  />
                  <div className='card-body'>
                    <div>
                      <Link
                        to={`/products/${product.id}`}
                        className='card-title fs-4 ms-3 text-secondary product-title'>
                        {product.name}
                      </Link>
                    </div>
                    <s className='card-text ms-3'>₹{product.maxRetailPrice}</s>
                    <span className=' product-discount ms-3 fs-6'>
                      ({product.discountApplicable}% Offer)
                    </span>
                    <p className='card-text ms-3 fs-3'>₹{finalSellingPrice}</p>
                    <Link to={`/products/${product.id}`} className='btn btn-primary  card-btn'>
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
