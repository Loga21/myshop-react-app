// importing FontAwesomeIcon package
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// importing useEffect, useState hooks
import React, { useEffect, useState } from 'react';
// importing fetchApi component
import { fetchApi } from '../../../utils/fetchApi';
// import ProductDetail from './ProductDetail/ProductDetail';

// Fn comp with anonymous function
// comp can have js, jsx and css (optional)
const ContactUsDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);
  const [products, setProducts] = useState({});

  useEffect(() => {
    // aft the initial rendering this callback fn wll be called
    // whats the API URL? https://jsonplaceholder.typicode.com/users
    // whats the REST API Client Tool? fetch
    // Whats the http Method? GET
    fetchApi('http://localhost:5000/contactData', 'GET')
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
    return <div className='alert-alert-danger'>Some Error Occurred. Try again later.</div>;
  }

  // must return jsx
  return (
    <div className='mt-4 col-md-5  ms-5 mx-0'>
      <h2 data-testid='contactUsHeading'>Contact Us</h2>
      <p data-testid='contactUsContent' className='lorem-text'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
      {/* fetching contact-details using GET method  */}
      <div className='contact-us-wrapper'>
        <FontAwesomeIcon icon='fa-solid fa-map' className='me-2' />
        {/* fetching the address */}
        <h6 className='ms-4 mb-3 pb-1 contact-details contact-address'>{products.address}</h6>
        <FontAwesomeIcon icon='fa-solid fa-phone' className='me-2' />
        {/* fetching the phone numbers */}
        <h6 className='ms-4 mb-4 contact-details phone-number'>{products.phone[0]}</h6>
        <h6 className='ms-4 mb-3 contact-details'>{products.phone[1]}</h6>
        <FontAwesomeIcon icon='fa-regular fa-envelope' className='me-2' />
        {/* fetching the email */}
        <h6 className='ms-4 mb-3 contact-details'>{products.email}</h6>
      </div>
    </div>
  );
};

export default ContactUsDetail;
