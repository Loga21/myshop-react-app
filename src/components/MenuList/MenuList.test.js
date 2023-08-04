// Test Pattern: AAA (Arrange, Act, Assert)
// Arrange
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import MenuItem from './MenuItem/MenuItem';
import MenuList from './MenuList';

describe('MenuList', () => {
  // test spec
  it('has proper MenuItem Component', () => {
    // Act
    render(
      <HashRouter>
        <MenuList />
      </HashRouter>
    );
    // Assert is mandatory for a test spec
    expect(MenuItem).toBeTruthy();
  });
  it('has proper className', () => {
    // Act
    render(
      <HashRouter>
        <MenuList />
      </HashRouter>
    );
    // Assert is mandatory for a test spec
    expect(screen.getByTestId('menuList')).toHaveClass('menu-list');
  });
  
});
