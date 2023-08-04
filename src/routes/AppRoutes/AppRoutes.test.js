import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter, MemoryRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

describe('AppRoutes', () => {
  it('should render home page', () => {
    render(
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    );
  // i to avoid casing 
    expect(screen.getByText(/Welcome to The Spark Clothing/i)).toBeInTheDocument();
  });

  it('should render about us page', () => {
    render(
      <MemoryRouter initialEntries={['/about-us-page']}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });

  it('should render contact us page', () => {
    render(
      <MemoryRouter initialEntries={['/contact-us']}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  });
});
