import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import PageNotFound from './PageNotFound';

it('renders PageNotFound component', () => {
  render(
    <HashRouter>
      <PageNotFound />
    </HashRouter>
  );

  expect(screen.getByText('404 - Page Not Found')).toBeInTheDocument();
  expect(screen.getByText('Sorry, page not found')).toBeInTheDocument();
});
