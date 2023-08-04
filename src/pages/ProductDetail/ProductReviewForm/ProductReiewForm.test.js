import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductReviewForm from './ProductReviewForm';
import { HashRouter } from 'react-router-dom';

describe('ProductReviewForm', () => {
  it('should render the form', () => {
    render(
      <HashRouter>
        <ProductReviewForm />
      </HashRouter>
    );
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone:')).toBeInTheDocument();
    expect(screen.getByLabelText('Review:')).toBeInTheDocument();
  });

  describe('ProductReviewForm', () => {
    test('renders all input fields', () => {
      const { getByLabelText } = render(<ProductReviewForm />);
      expect(getByLabelText('Name:')).toBeInTheDocument();
      expect(getByLabelText('Email:')).toBeInTheDocument();
      expect(getByLabelText('Phone:')).toBeInTheDocument();
      expect(getByLabelText('Review:')).toBeInTheDocument();
    });

    test('submits the form', () => {
      const onSubmit = jest.fn();
      const { getByLabelText, getByRole } = render(<ProductReviewForm onSubmit={onSubmit} />);
      fireEvent.change(getByLabelText('Name:'), { target: { value: 'John Doe' } });
      fireEvent.change(getByLabelText('Email:'), { target: { value: 'john@example.com' } });
      fireEvent.change(getByLabelText('Phone:'), { target: { value: '1234567890' } });
      fireEvent.change(getByLabelText('Review:'), {
        target: { value: 'This is a great product!' }
      });
      fireEvent.click(getByRole('button', { name: 'Submit' }));
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit).toHaveBeenCalledWith({
        fullName: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        review: 'This is a great product!'
      });
    });
  });
});
