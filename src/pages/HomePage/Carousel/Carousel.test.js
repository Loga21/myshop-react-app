import React from 'react';
import { render, screen } from '@testing-library/react';
import Carousel from './Carousel';
import { HashRouter } from 'react-router-dom';

describe('Carousel', () => {
  it('has the carousel items', () => {
    render(
      <HashRouter>
        <Carousel />
      </HashRouter>
    );
    expect(screen.getByText('Same Day Delivery')).toBeInTheDocument();
    expect(screen.getByText('Visit Now!')).toBeInTheDocument();
    expect(screen.getByText('Welcome to The Spark Clothing')).toBeInTheDocument();
  });

  it('has the altText', () => {
    render(
      <HashRouter>
        <Carousel />
      </HashRouter>
    );
    expect(screen.getAllByAltText('Spark Clothing').length).toBe(3);
  });

  it('has the Carousel images', () => {
    render(
      <HashRouter>
        <Carousel />
      </HashRouter>
    );
    expect(screen.getByAltText('Same Day Delivery')).toHaveAttribute(
      'src',
      './assets/images/carousel-img-3.webp'
    );
    expect(screen.getByAltText('Visit Now!')).toHaveAttribute(
      'src',
      './assets/images/carousel-img-2.webp'
    );
    expect(screen.getByAltText('Welcome to The Spark Clothing')).toHaveAttribute(
      'src',
      './assets/images/carousel-img-1.webp'
    );
  });
});
