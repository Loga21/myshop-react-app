import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import AboutUsPage from './AboutUsPage';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';

describe('AboutUsPage', () => {
  it('has the image and the altText', () => {
    render(
      <HashRouter>
        <AboutUsPage />
      </HashRouter>
    );
    expect(screen.getByAltText('Spark Clothing')).toBeInTheDocument();
    expect(screen.getByAltText('Spark Clothing')).toHaveAttribute(
      'src',
      '../assets/images/about-us-img-2.png'
    );
  });

  it('has the helmet component`', () => {
    render(
      <HashRouter>
        <AboutUsPage />
      </HashRouter>
    );
    expect(HelmetSetup).toBeTruthy();
  });

  it('has the nested routing', () => {
    render(
      <HashRouter>
        <AboutUsPage />
      </HashRouter>
    );
    expect(screen.getByText('About Company')).toBeInTheDocument();
    expect(screen.getByText('History')).toBeInTheDocument();
  });
});
