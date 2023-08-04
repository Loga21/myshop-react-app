import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { fetchApi } from '../../utils/fetchApi';
import ProductsPage from './ProductsPage';

jest.mock('../../utils/fetchApi');

describe('ProductsPage', () => {
  beforeEach(() => {
    fetchApi.mockClear();
  });

  it('renders correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ProductsPage />
      </MemoryRouter>
    );
    expect(getByText('All')).toBeInTheDocument();
  });

  it('shows a loading spinner while fetching products', async () => {
    fetchApi.mockResolvedValueOnce([]);
    const { getByTestId } = render(
      <MemoryRouter>
        <ProductsPage />
      </MemoryRouter>
    );
    expect(getByTestId('spinner')).toBeInTheDocument();
    await waitFor(() => expect(getByTestId('spinner')).not.toBeInTheDocument());
  });

  it('shows an error message if fetching products fails', async () => {
    fetchApi.mockRejectedValueOnce(new Error('Network error'));
    const { getByText } = render(
      <MemoryRouter>
        <ProductsPage />
      </MemoryRouter>
    );
    await waitFor(() =>
      expect(getByText('Some Error Occurred. Try again later.')).toBeInTheDocument()
    );
  });

  it('makes an API call with the correct URL when the location changes', async () => {
    const location = { search: '?category=Men' };
    render(
      <MemoryRouter initialEntries={[{ pathname: '/', search: location.search }]}>
        <ProductsPage />
      </MemoryRouter>
    );
    await waitFor(() =>
      expect(fetchApi).toHaveBeenCalledWith(
        `http://localhost:5000/products${location.search}`,
        'GET'
      )
    );
  });
});
