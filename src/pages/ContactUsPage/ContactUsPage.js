// importing useState hook
import { useState } from 'react';
// importing HelmetSetup component
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';
// importing react hook form
import { useForm } from 'react-hook-form';
// importing scss file
import './ContactUsPage.scss';
// importing ContactUs component
import ContactUsDetail from './ContactUsDetail/ContactUsDetail';

// Fn comp with anonymous function
// comp can have js, jsx and css (optional)
const ContactUsPage = () => {
  const [isError, setIsError] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [getInTouchData, setGetInTouchData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { register, handleSubmit, reset } = useForm();

  // handling the onsubmit event
  const onSubmit = (event) => {
    getInTouchData.name = event.fullName;
    getInTouchData.email = event.email;
    getInTouchData.message = event.message;
    setGetInTouchData({ ...getInTouchData });
    fetch('http://localhost:5000/getInTouchData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(getInTouchData)
    })
      .then((res) => {
        return res.json();
      })
      .then((resInJson) => {
        // capturing converted JSON res.
        console.log(resInJson);
        if (resInJson.statuscode !== 404) {
          setIsSaved(true);
          setTimeout(() => setIsSaved(false), 2000);
          setIsError(false);
        } else {
          setIsError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setTimeout(() => setIsError(false), 2000);
      })
      .finally(() => {});

    // resetting the input field values
    reset({ fullName: '', email: '', message: '' });
    // console.log(setIsSaved);
  };

  // must return JSX
  return (
    <div className='d-flex mt-5 mb-4 contactUs-wrapper'>
      {/* integrating helmetSetup comp  */}
      <HelmetSetup title='Contact Us' />
      {/* integrating ContactUs comp  */}
      <ContactUsDetail />
      <div className='contact-form mt-4 pt-1 mb-2 mx-5'>
        <div className='row for-margin'>
          <div className='col-md-12'>
            {/* form input starts here */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-3'>
                {/* name input field */}
                <label htmlFor='nameInput' className='form-label'>
                  Name
                </label>
                <input
                  type='text'
                  {...register('fullName')}
                  className='form-control'
                  name='fullName'
                  id='nameInput'
                  required
                />
              </div>
              <div className='mb-3'>
                {/* Email input field */}
                <label htmlFor='emailInput' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  {...register('email')}
                  className='form-control'
                  name='email'
                  id='emailInput'
                  required
                />
              </div>
              <div className='mb-3'>
                {/* Message input field */}
                <label htmlFor='message' className='form-label'>
                  Message
                </label>
                <textarea
                  {...register('message')}
                  className='form-control'
                  id='message'
                  rows='4'
                  name='message'
                  required
                />
              </div>
              {/* send message btn */}
              <button type='submit' className='btn btn-primary mt-2 mb-4' data-testid='submitForm'>
                Send Message
              </button>
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
                <div className='alert alert-danger'>Some Error Occurred. Try again Later!</div>
                  )
                : (
                    ''
                  )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
