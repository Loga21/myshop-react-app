import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { HashRouter, MemoryRouter } from 'react-router-dom';

describe('HomePage component', () => {
  it('has all policies', () => {
    render(
      <HashRouter>
        <HomePage />
      </HashRouter>
    );
    expect(screen.getByText('FREE SHIPPING & RETURN')).toBeInTheDocument();
    expect(screen.getByText('MONEY BACK GUARANTEE')).toBeInTheDocument();
    expect(screen.getByText('ONLINE SUPPORT 24/7')).toBeInTheDocument();
  });

  it('has the HelmetSetup component with title "Home"', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
