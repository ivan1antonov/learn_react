import React from 'react';

interface SearchResult {
  name: string;
  description?: string;
}

interface SearchState {
  searchTerm: string;
  results: SearchResult[];
}

interface SearchProps {
  onSearch: (results: SearchResult[]) => void;
}

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    const savedSearchTerm = localStorage.getItem('searchTerm') || '';
    this.state = {
      searchTerm: savedSearchTerm,
      results: [],
    };
  }

  handleSearch = () => {
    const { searchTerm } = this.state;
    const trimmedSearchTerm = searchTerm.trim();
    localStorage.setItem('searchTerm', trimmedSearchTerm);
    fetch(`https://swapi.dev/api/people/?search=${trimmedSearchTerm}`)
      .then(responce => {
        return responce.json();
      })
      .then(data => {
        console.dir(data);
        this.setState({ results: data.results });
        this.props.onSearch(data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  componentDidMount() {
    const { searchTerm } = this.state;
    const url = searchTerm
      ? `https://swapi.dev/api/people/?search=${searchTerm}`
      : `https://swapi.dev/api/people`;
    fetch(url)
      .then(responce => responce.json())
      .then(data => {
        console.dir(data);
        this.setState({ results: data.results });
        this.props.onSearch(data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleSearch();
          }}
        >
          <label htmlFor="search">Enter your request</label>
          <input
            type="search"
            id="search"
            name="searchField"
            onChange={this.handleInputSearch}
            value={this.state.searchTerm}
          />
          <button type="submit" onClick={this.handleSearch}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
