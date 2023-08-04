import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  // test spec
  it('has `Spark Clothing` as company name', () => {
    // act
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );
    const companyName = screen.getByTestId('companyName');
    expect(companyName).toBeInTheDocument();
    expect(companyName.textContent).toBe('Spark Clothing');
  });

  it('has placeholder text `Search`', () => {
    // act
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );
    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();
  });

  it('has the menuList', () => {
    // act
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );
    const menuList = screen.getByRole('list');
    expect(menuList).toBeInTheDocument();
  });

  it('has the search icon', () => {
    // act
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );
    const searchIcon = screen.getByTestId('searchIcon');
    expect(searchIcon).toBeInTheDocument();
  });
});
