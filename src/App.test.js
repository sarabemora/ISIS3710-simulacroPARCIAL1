import { render, screen } from '@testing-library/react';
import App from './App';

test('renders username', () => {
  render(<App />);
  const usernameElement = screen.getByText(/username/i);
  expect(usernameElement).toBeInTheDocument();
});

test('renders full name', () => {
  render(<App />);
  const fullNameElement = screen.getByText(/Firstname Lastname/i);
  expect(fullNameElement).toBeInTheDocument();
});

test('renders description', () => {
  render(<App />);
  const descriptionElement = screen.getByText(/Proin at iaculis arcu. Proin id mi id dolor aliquet facilisis/i);
  expect(descriptionElement).toBeInTheDocument();
});

test('renders website URL', () => {
  render(<App />);
  const urlElement = screen.getByText(/www.website.com/i);
  expect(urlElement).toBeInTheDocument();
});

test('renders posts count', () => {
  render(<App />);
  const postsElement = screen.getByText(/870 posts/i);
  expect(postsElement).toBeInTheDocument();
});

test('renders followers count', () => {
  render(<App />);
  const followersElement = screen.getByText(/496 followers/i);
  expect(followersElement).toBeInTheDocument();
});

test('renders following count', () => {
  render(<App />);
  const followingElement = screen.getByText(/112 following/i);
  expect(followingElement).toBeInTheDocument();
});

test('renders 12 images', () => {
  render(<App />);
  const images = screen.getAllByRole('img');
  expect(images.length).toBe(12);
});
