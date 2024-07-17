import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../Search/Search';

describe('Search Component', () => {
  it('renders the search form', () => {
    const { getByRole } = render(<Search onSearch={jest.fn()} setLoading={jest.fn()} />);
    const inputElement = getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
    const buttonElement = getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls handleSearch on form submission', () => {
    const onSearchMock = jest.fn();
    const setLoadingMock = jest.fn();
    const { getByRole } = render(<Search onSearch={onSearchMock} setLoading={setLoadingMock} />);

    const inputElement = getByRole('textbox');
    userEvent.type(inputElement, 'Luke');
    const buttonElement = getByRole('button');
    userEvent.click(buttonElement);

    expect(setLoadingMock).toHaveBeenCalledWith(true);
  });
});
