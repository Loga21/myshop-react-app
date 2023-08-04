import React from 'react';
// importing scss file
import '../AboutUsPage.scss';

// Fn component with Named Fn
// comp can have js, jsx and css (optional)
const AboutCompany = () => {
  // must return JSX
  return (
    <div className='d-flex aboutUs text-center px-5'>
      {/* Adding the image */}
      <div className='col-md-7'>
        <img
          src='../assets/images/about-us-img-1.png'
          alt='Spark Clothing'
          className='mt-3 aboutUs-img'
        />
      </div>
      <div className='col-md-5 ms-4'>
        <h5 data-testid='companyTagline' className='mb-2 mt-2'>
          “We have the capabilities and experience to deliver the products you need to move
          forward.”
        </h5>
        <p data-testid='companyPolicy' className='aboutUs'>
          With a brand portfolio including Gucci, Dolce and Gabbana, Moncler, Jimmy Choo, Stone
          Island, and Kenzo, Spark Clothings has developed quickly with stores opening in driving US
          urban areas including Chicago, Dallas, Las Vegas, New Orleans, San Jose, and Boston. Spark
          Clothings persistently takes a stab at magnificence, sourcing key pieces, and
          accumulations from the world most notable brands close by new and energizing fashioners.
          The cool, open, and negligible insides of the stores enable each cautiously chosen brand
          to have its own personality, mirroring the organization reasoning in the significance of
          independence and tender loving care. By giving perfect client benefits in a one-of-a-kind
          setting, Spark Clothings has made a benchmark for extravagance retailing. A built-up
          worldwide online extravagance retailer, Spark Clothings.com has been structured as an
          expansion of an officially effective business, offering the equivalent notable architect
          marks as the stores.
        </p>
      </div>
    </div>
  );
};

export default AboutCompany;
