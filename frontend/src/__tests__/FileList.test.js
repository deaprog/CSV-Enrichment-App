import { render, screen } from '@testing-library/react';
import FileList from '../FileList';

test('renders loading message initially', () => {
  render(<FileList />);
  const loadingElement = screen.getByText(/Loading.../i);
  expect(loadingElement).toBeInTheDocument();
});
