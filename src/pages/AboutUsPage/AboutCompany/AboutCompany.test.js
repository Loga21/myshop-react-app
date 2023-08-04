import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import AboutCompany from './AboutCompany';

describe('AboutUs component', () => {
  it('has the company tagline', () => {
    render(
      <HashRouter>
        <AboutCompany />
      </HashRouter>
    );
    expect(screen.getByTestId('companyTagline')).toBeInTheDocument();
    expect(screen.getByTestId('companyTagline')).toHaveTextContent(
      '“We have the capabilities and experience to deliver the products you need to move forward.”'
    );
  });

  it('has the company policy', () => {
    render(
      <HashRouter>
        <AboutCompany />
      </HashRouter>
    );
    expect(screen.getByTestId('companyPolicy')).toBeInTheDocument();
    expect(screen.getByTestId('companyPolicy')).toHaveTextContent(
      'With a brand portfolio including Gucci, Dolce and Gabbana, Moncler, Jimmy Choo, Stone Island, and Kenzo'
    );
  });

  it('has the company image', () => {
    render(
      <HashRouter>
        <AboutCompany />
      </HashRouter>
    );
    expect(screen.getByAltText('Spark Clothing')).toBeInTheDocument();
    expect(screen.getByAltText('Spark Clothing')).toHaveAttribute('src', '../assets/images/about-us-img-1.png');
  });
});
