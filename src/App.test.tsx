import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App component', () => {
  it('renders search input and button', () => {
    render(<App />);

    // Проверяем наличие input и button
    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: /search/i });

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('renders search results', () => {
    const mockSearchResults = [
      { name: 'Result 1', description: 'Description 1' },
      { name: 'Result 2', description: 'Description 2' },
    ];

    render(<App search={mockSearchResults} />);

    // Проверяем наличие результатов поиска
    mockSearchResults.forEach(result => {
      expect(screen.getByText(result.name)).toBeInTheDocument();
      expect(screen.getByText(result.description)).toBeInTheDocument();
    });
  });
});
