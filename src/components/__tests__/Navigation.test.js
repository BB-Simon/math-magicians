import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../Navigation';

describe('Jest Snapshot testing suite', () => {
  it('renders correctly', () => {
    const domTree = TestRenderer.create(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    ).toJSON();
    expect(domTree).toMatchSnapshot();

    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );
    const logoEle = screen.getByText(/Math Magicians/i);
    expect(logoEle).toBeInTheDocument();
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();
    const calculatorLink = screen.getByText(/Calculator/i);
    expect(calculatorLink).toBeInTheDocument();
    const quoteLink = screen.getByText(/Quote/i);
    expect(quoteLink).toBeInTheDocument();
  });
});
