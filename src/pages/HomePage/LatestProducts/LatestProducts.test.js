import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { fetchApi } from '../../../utils/fetchApi';
import LatestProducts from './LatestProducts';

jest.mock('../../../utils/fetchApi');
describe('LatestProducts', () => {
  it('[MOCKING]: fetches users via rest api call', async () => {
    const mockUserList = [
      {
        id: 1,
        name: 'Product 1',
        thumbnailUrl: 'http://example.com/product1.jpg',
        imgAltText: 'Product 1 image',
        maxRetailPrice: 100,
        discountApplicable: 10
      },
      {
        id: 2,
        name: 'Product 2',
        thumbnailUrl: 'http://example.com/product2.jpg',
        imgAltText: 'Product 2 image',
        maxRetailPrice: 200,
        discountApplicable: 20
      }
    ];
    // 2 Resolve the Http req with the above mock data as successful res
    fetchApi.mockResolvedValue(mockUserList);
    // 3 Render the comp
    render(
      <HashRouter>
        <LatestProducts />
      </HashRouter>
    );
    // 4 Assert
    const nameElement = await screen.findByText('Product 1');
    expect(nameElement).toBeInTheDocument();
  });

  it('renders error message if fetching data fails', async () => {
    // Arrange
    fetchApi.mockRejectedValueOnce(new Error('Some error occurred'));

    // Act
    render(
      <HashRouter>
        <LatestProducts />
      </HashRouter>
    );

    // Assert
    // expect(screen.getByText(/some error occurred/i)).toBeInTheDocument();
    expect(screen.getByTestId('errorMsg')).toHaveTextContent('Some Error Occurred. Try again later.');
    expect(fetchApi).toHaveBeenCalledTimes(1);
    expect(fetchApi).toHaveBeenCalledWith(
      'http://localhost:5000/products?bestSellerRanking=1&bestSellerRanking=2&bestSellerRanking=3',
      'GET'
    );
  });
});
