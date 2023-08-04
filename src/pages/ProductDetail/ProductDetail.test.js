import { render, screen, waitFor } from '@testing-library/react';
import ProductDetail from './ProductDetail';
import { fetchApi } from '../../utils/fetchApi';

describe('ProductDetail', () => {
  beforeEach(() => {
    // Mock fetchApi to return a product with ID 1
    global.fetch = jest.fn().mockResolvedValue({
      json: () =>
        Promise.resolve([
          {
            id: 1,
            name: 'Product 1',
            brand: 'Brand 1',
            description: 'Description 1',
            imageUrl: 'http://example.com/product1.jpg',
            thumbnailUrl: 'http://example.com/product1-thumb.jpg',
            imageAltText: 'Product 1 Image',
            maxRetailPrice: 100,
            category: 'Category 1',
            discountApplicable: false,
            added: '2022-04-01T12:00:00.000Z',
            quantity: 10,
            bestSellerRanking: 1,
            featured: true,
            reviews: []
          }
        ])
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should show error message when API call fails', async () => {
    // Mock fetchApi to return a 404 error
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ statusCode: 404 })
    });

    // Render the component with ID 1
    render(<ProductDetail match={{ params: { productId: 1 } }} />);

    // Wait for API call to complete
    await screen.findByText('Some Error Occurred. Try again later.');

    // Expect error message to be rendered
    expect(screen.getByText('Some Error Occurred. Try again later.')).toBeInTheDocument();
  });

  it('renders product detail', () => {
    render(<ProductDetail />);
    expect(screen.getByText(/Back/i)).toBeInTheDocument();
  });

  it('displays error message when there is an error', () => {
    render(<ProductDetail />);
    expect(screen.getByText(/Some Error Occurred/i)).toBeInTheDocument();
  });
});

// import ProductDetail from './ProductDetail';

jest.mock('../../utils/fetchApi');

const mockProduct = {
  id: 1,
  name: 'Product Name',
  brand: 'Brand',
  description: 'Product description',
  imageUrl: 'https://example.com/image.png',
  thumbnailUrl: 'https://example.com/thumbnail.png',
  imageAltText: 'Image alt text',
  maxRetailPrice: 100,
  category: 'Category',
  discountApplicable: false,
  added: '2022-01-01',
  quantity: 10,
  bestSellerRanking: 1,
  featured: true,
  reviews: [
    {
      name: 'John Doe',
      phone: '1234567890',
      email: 'johndoe@example.com',
      rating: 4,
      review: 'Product review'
    }
  ]
};

describe('ProductDetail component', () => {
  beforeEach(() => {
    fetchApi.mockReset();
  });

  test('renders product details on successful API response', async () => {
    fetchApi.mockResolvedValueOnce(mockProduct);

    const { getByText } = render(<ProductDetail />, { params: { productId: '1' } });

    await waitFor(() => {
      expect(fetchApi).toHaveBeenCalledTimes(1);
      expect(fetchApi).toHaveBeenCalledWith('http://localhost:5000/products?id=1', 'GET');
      expect(getByText('Product Name')).toBeInTheDocument();
      expect(getByText('Brand')).toBeInTheDocument();
      expect(getByText('Product description')).toBeInTheDocument();
    });
  });

  test('renders error message on failed API response', async () => {
    fetchApi.mockRejectedValueOnce(new Error('API error'));

    const { getByText } = render(<ProductDetail />, { params: { productId: '1' } });

    await waitFor(() => {
      expect(fetchApi).toHaveBeenCalledTimes(1);
      expect(fetchApi).toHaveBeenCalledWith('http://localhost:5000/products?id=1', 'GET');
      expect(getByText('Some Error Occurred. Try again later.')).toBeInTheDocument();
    });
  });
});
