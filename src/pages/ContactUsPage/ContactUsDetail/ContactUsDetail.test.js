import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactUsDetail from './ContactUsDetail';
import { HashRouter } from 'react-router-dom';
import { fetchApi } from '../../../utils/fetchApi';

jest.mock('../../../utils/fetchApi');
describe('ContactUsDetail', () => {
  it('[MOCKING]: fetches details via rest api call', async () => {
    const mockUserList = [
      {
        address: '123 Main St',
        phone: ['123-456-7890', ''],
        email: 'test@example.com'
      }
    ];
    // Resolve the Http req with the above mock data as successful res
    fetchApi.mockResolvedValue(mockUserList);
    // Render the comp
    render(
      <HashRouter>
        <ContactUsDetail />
      </HashRouter>
    );
    // Assert
    const address = await screen.findByTestId('address');
    expect(address).toHaveTextContent('123 Main St');
    const email = await screen.findByText('test@example.com');
    expect(email).toBeInTheDocument();
  });

  it('[MOCKING]: renders error properly during API call', async () => {
    // prepare the mock error for the comp
    const error = 'Error occurred';
    // Reject the Http request with the above error
    fetchApi.mockRejectedValue(error);
    // Render the comp
    render(
      <HashRouter>
        <ContactUsDetail />
      </HashRouter>
    );
    // Assert
    const errorMsg = await screen.findByText('Some Error Occurred. Try again later.');
    expect(errorMsg).toBeInTheDocument();
  });
});
