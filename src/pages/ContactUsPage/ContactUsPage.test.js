import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactUsPage from './ContactUsPage';
import { HashRouter } from 'react-router-dom';

describe('ContactUsPage', () => {
  it('has the form input fields', () => {
    render(
      <HashRouter>
        <ContactUsPage />
      </HashRouter>
    );
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('has the attribute types', async () => {
    render(
      <HashRouter>
        <ContactUsPage />
      </HashRouter>
    );
    expect(screen.getByLabelText('Name')).toHaveAttribute('type', 'text');
    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email');
    expect(screen.getByLabelText('Message')).toHaveAttribute('name', 'message');
  });

  it('shows the success message while submitting the form', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () => Promise.resolve({ statuscode: 200 })
    });

    render(
      <HashRouter>
        <ContactUsPage />
      </HashRouter>
    );
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');
    const submitButton = screen.getByText('Send Message');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'This is a test message.' } });
    fireEvent.click(submitButton);

    await screen.findByTestId('submitForm');

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:5000/getInTouchData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john.doe@example.com',
        message: 'This is a test message.'
      })
    });
  });

  it('shows the error message while submitting the form', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Network Error'));

    render(
      <HashRouter>
        <ContactUsPage />
      </HashRouter>
    );
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');
    const submitButton = screen.getByText('Send Message');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'This is a test message.' } });
    fireEvent.click(submitButton);

    await screen.findByText('Some Error Occurred. Try again Later!');

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:5000/getInTouchData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john.doe@example.com',
        message: 'This is a test message.'
      })
    });

    expect(screen.getByText('Some Error Occurred. Try again Later!')).toBeInTheDocument();
  });
});
