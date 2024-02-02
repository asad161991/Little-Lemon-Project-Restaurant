import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  // Output the HTML structure for debugging
  console.log(document.body.innerHTML);

  // Adjusted text matcher with simple string
  const linkElement = screen.getByText('About', { exact: false });
  expect(linkElement).toBeInTheDocument();
});
