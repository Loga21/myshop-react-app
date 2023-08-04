// importing fontawesome package
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// importing scss file
import './ProductDetail.scss';
// importing star rating component
import { Rating } from 'react-simple-star-rating';
// importing useEffect, useState hooks
import { useEffect, useState } from 'react';
// importing Link, useParams package
import { Link, useParams } from 'react-router-dom';
// importing fetchApi component
import { fetchApi } from '../../utils/fetchApi';
// importing HelmetSetup component
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';
// importing react modal
import Modal from 'react-modal';
// importing productReview form
import ProductReviewForm from './ProductReviewForm/ProductReviewForm';

// Fn component with Named Fn
// comp can have js, jsx and css (optional)
const ProductDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [productDetail, setProductDetail] = useState({});
  // const [reviewCount, setReviewCount] = useState(0);
  const [reviewModal, setReviewModal] = useState(false);
  // const [useEffectDependency, setUseEffectDependency] = useState(0);
  const [rating, setRating] = useState(0);
  const { productId } = useParams();

  useEffect(() => {
    // aft the initial rendering this callback fn wll be called
    // whats the REST API Client Tool? fetch
    // Whats the http Method? GET
    fetchApi(`http://localhost:5000/products/${productId}`, 'GET')
      .then((resInJson) => {
        // capturing converted JSON res.
        console.log(resInJson);
        if (resInJson.statusCode !== 404) {
          setProductDetail(resInJson);
          // setReviewCount(resInJson.reviews.length);
          setIsError(false);
        } else {
          setProductDetail({});
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
    return <div className='spinner-border text-success' data-testid='spinner'></div>;
  }

  if (isError) {
    return <div className='alert-alert-danger'>Some Error Occurred. Try again later.</div>;
  }

  // handling onsubmit event
  const handleSubmit = (event) => {
    // getting the form values
    event.preventDefault();
    console.log(event.target.fullName.value);
    console.log(event.target.email.value);
    console.log(event.target.phone.value);
    console.log(event.target.review.value);
    const productData = {
      ...productDetail,
      reviews: [...productDetail.reviews]
    };
    const userData = {
      name: event.target.fullName.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      rating,
      review: event.target.review.value
    };
    productData.reviews.push(userData);

    // posting the reviews to back end using PUT method
    fetch(`http://localhost:5000/products/${productId}`, {
      method: 'PUT',
      body: JSON.stringify(productData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((resInJson) => {
        // capturing converted JSON res.
        console.log(resInJson);
        if (resInJson.statuscode !== 404) {
          setProductDetail(resInJson);
          setIsSaved(true);
          setTimeout(() => setIsSaved(false), 3000);
          setIsError(false);
        } else {
          setIsError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setTimeout(() => setIsError(false), 3000);
      })
      .finally(() => {});
    // setUseEffectDependency((n) => (n += 1));
    event.target.reset();
    setRating(0);
  };

  // function for getting the star rating
  const handleRating = (rate) => {
    setRating(rate);
  };

  // applying internal styles for the react modal
  const modalStyle = {
    content: {
      height: '65%',
      width: '30%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      boxShadow: ' 3px 3px 9px 2px grey'
    }
  };

  // must return JSX
  return (
    <div className='mt-5'>
      {/* integrating the helmet comp */}
      <HelmetSetup title='Product Detail' />
      {/* integrating the back btn and fontawesome icon */}
      <Link to='/products' className='btn btn-link'>
        <FontAwesomeIcon icon='fa-solid fa-angle-left' className='me-1' />
        Back
      </Link>
      <div className='d-flex mb-3 mt-3 mx-5 product-container'>
        {/* adding the image */}
        <div className='mb-2 pdt-img'>
          <img
            src={productDetail.imageUrl}
            alt={productDetail.imgAltText}
            height={420}
            width={550}
          />
        </div>
        {/* adding the name, maxRetailPrice and discountApplicable */}
        <div className='ms-5 product-info'>
          <h2>{productDetail.name}</h2>
          <s className='fs-6 text-secondary mb-1'>MRP: ₹{productDetail.maxRetailPrice}</s>
          <span className=' product-discount ms-3 fs-8'>
            ({productDetail.discountApplicable}% Offer)
          </span>
          <p className='fs-3 text-dark mb-1'>
            ₹
            {Math.round(
              productDetail.maxRetailPrice -
                productDetail.maxRetailPrice * (productDetail.discountApplicable / 100)
            )}
          </p>
          <p className='fs-7 text-secondary mb-1'>Category: {productDetail.category}</p>
          <p className='fs-7 text-secondary'>Quantity: {productDetail.quantity}</p>
          <h5>Description</h5>
          <p>{productDetail.description}</p>
          <p className='product-detail'>
            Offer ends soon grab your outfits and enjoy this festive season.
          </p>
          <p className='product-detail'>
            Easy Returns, Cash On Delivery Available, Fastest Delivery Guaranteed.
          </p>
          <div className='d-flex mt-3'>
            {/* adding the total review counts */}
            <button className='btn btn-primary mt-2 col-md-4' onClick={() => setReviewModal(true)}>
              Total Reviews: {productDetail.reviews.length}
            </button>
            {/* adding the review btn */}
            <button
              type='button'
              className='btn btn-dark col-md-3 mt-2 review-btn'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
              data-bs-whatever='@mdo'>
              Write a Review
            </button>
            <div
              className='modal fade review-modal'
              id='exampleModal'
              tabIndex='-1'
              aria-labelledby='exampleModalLabel'
              aria-hidden='true'>
              <div className='modal-dialog mt-5'>
                <div className='modal-content'>
                  {/* integrating the productDetail form */}
                  <form onSubmit={handleSubmit}>
                    <ProductReviewForm />
                    <div className='d-flex mb-3 ms-3 star-rating'>
                      <label className='col-form-label me-2'>Rating:</label>
                      <Rating initialValue={rating} onClick={handleRating} name='starRating' />
                    </div>
                    {/* integrating the cancel btn */}
                    <div className='modal-footer'>
                      <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                        Cancel
                      </button>
                      {/* integrating the submit btn */}
                      <button
                        type='submit'
                        className='btn btn-primary'
                        >
                        Submit
                      </button>
                    </div>
                    {isSaved
                      ? (
                      <div className='alert alert-success' data-testid='saveText'>
                        Saved Successfully!
                      </div>
                        )
                      : (
                          ''
                        )}
                    {isError
                      ? (
                      <div className='alert alert-danger'>
                        Some Error Occurred. Try again Later!
                      </div>
                        )
                      : (
                          ''
                        )}
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* integrating the react modal to list the reviews */}
          <Modal
            isOpen={reviewModal}
            style={modalStyle}
            ariaHideApp={false}
            contentLabel='Example Modal'>
            <div>
              <h2 className='model-head'>Reviews</h2>
              <button
                className='close-button'
                onClick={() => {
                  setReviewModal(false);
                }}>
                x
              </button>
            </div>
            <hr />
            {/* mapping the reviews */}
            <div>
              {productDetail.reviews?.map((review, index) => {
                return (
                  <div key={index + 20}>
                    <b className='mt-4 fs-5'>{review.name}</b>
                    <span className='ms-2 fs-9'>&bull; {review.email}</span>
                    <p>{review.review}</p>
                    <hr />
                  </div>
                );
              })}
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
