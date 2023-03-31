import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const headElement = screen.getByText(/Welcome to our page!/i);
  expect(headElement).toBeInTheDocument();
});
