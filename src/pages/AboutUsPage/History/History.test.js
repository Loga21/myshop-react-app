import React from 'react';
import { render, screen } from '@testing-library/react';
import History from './History';
import { HashRouter } from 'react-router-dom';

describe('History', () => {
  it('has the history content', () => {
    render(
      <HashRouter>
        <History />
      </HashRouter>
    );
    expect(screen.getByTestId('history').textContent).toContain(
      'The story of Spark Clothing started in Bangalore'
    );
  });
});
