import React from 'react';

const ProductReviewForm = () => {
  return (
    <>
      <div className='modal-header'>
        <h1 className='modal-title mt-0 fs-5' id='exampleModalLabel'>
          Write a Review
        </h1>
        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
      </div>
      <div className='modal-body'>
        <div className='d-flex mb-3'>
          <label htmlFor='recipient-name' className='col-form-label me-3'>
            Name:
          </label>
          <input
            type='text'
            name='fullName'
            className='form-control'
            id='recipient-name'
            required
          />
        </div>
        <div className='d-flex mb-3'>
          <label htmlFor='recipient-email' className='col-form-label me-3'>
            Email:
          </label>
          <input
            type='text'
            name='email'
            className='form-control ms-1'
            id='recipient-email'
            required
          />
        </div>
        <div className='d-flex mb-3'>
          <label htmlFor='recipient-phone' className='col-form-label me-2'>
            Phone:
          </label>
          <input
            type='text'
            name='phone'
            className='form-control ms-1'
            id='recipient-phone'
            required
          />
        </div>
        <div className='d-flex mb-3'>
          <label htmlFor='message-text' className='col-form-label me-1'>
            Review:
          </label>
          <textarea
            className='form-control ms-1'
            id='message-text'
            name='review'
            defaultValue={''}
            required
          />
        </div>
      </div>
    </>
  );
};

export default ProductReviewForm;
