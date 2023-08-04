// Test pattern: AAA
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
// Lets load the sample
import Footer from './Footer';

// TEST SUITE = group of related test cases
describe('Footer', () => {
  // test case or test spec
  it('has footer with text `Copyright 2023 | Spark Clothing`', () => {
    // Act
    render(
      <HashRouter>
        <Footer />
      </HashRouter>
    );
    const footerText = screen.getByTestId('footerText');
    expect(footerText).toHaveTextContent(`Copyright ${new Date().getFullYear()} | Spark Clothing`);
  });

  it('has the fontawesome icons', () => {
    // Act
    render(
      <HashRouter>
        <Footer />
      </HashRouter>
    );
    const twitterIcon = screen.getByTestId('twitterIcon');
    expect(twitterIcon).toBeInTheDocument();
    const instagramIcon = screen.getByTestId('instagramIcon');
    expect(instagramIcon).toBeInTheDocument();
    const facebookIcon = screen.getByTestId('facebookIcon');
    expect(facebookIcon).toBeInTheDocument();
    const whatsAppIcon = screen.getByTestId('whatsAppIcon');
    expect(whatsAppIcon).toBeInTheDocument();
  });
});
