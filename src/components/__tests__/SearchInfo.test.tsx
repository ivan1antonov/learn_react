import { render } from '@testing-library/react';
import SearchInfo from '../Search/SearchInfo';

const mockResults = [
  { name: 'Luke Skywalker', birth_year: '19BBY', gender: 'male', skin_color: 'fair' },
  { name: 'Darth Vader', birth_year: '41.9BBY', gender: 'male', skin_color: 'white' },
];

test('displays loading indicator when loading', () => {
  const { getByAltText } = render(<SearchInfo resultSearch={[]} isLoading={true} />);
  const loaderElement = getByAltText('loading');
  expect(loaderElement).toBeInTheDocument();
});

test('displays search results when not loading', () => {
  const { getByText } = render(<SearchInfo resultSearch={mockResults} isLoading={false} />);
  const firstResult = getByText('Luke Skywalker');
  const secondResult = getByText('Darth Vader');
  expect(firstResult).toBeInTheDocument();
  expect(secondResult).toBeInTheDocument();
});

test('displays "No results found" when no results', () => {
  const { getByText } = render(<SearchInfo resultSearch={[]} isLoading={false} />);
  const noResultsMessage = getByText('No results found');
  expect(noResultsMessage).toBeInTheDocument();
});
