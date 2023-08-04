import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MenuItem from './MenuItem';

describe('MenuItem', () => {
  // test spec
  it('receives url and navigation prop and displays in JSX', () => {
    // act
    render(
      //for list & nav-link u have use memoryRouter
      <MemoryRouter>
        <MenuItem url='/home' navigation='Home' />
      </MemoryRouter>
    );
    // assert
    expect(screen.getByTestId('url')).toHaveAttribute('href', '/home');
    expect(screen.getByTestId('url')).toHaveTextContent('Home |');
  });
});
