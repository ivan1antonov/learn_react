import React from 'react';
import './App.css';
import Search from './components/Search';
import SearchInfo from './components/SearchInfo';

interface SearchResult {
  name: string;
  description?: string;
}

interface AppState {
  results: SearchResult[];
}

type EmptyObject = Record<string, never>;

class App extends React.Component<EmptyObject, AppState> {
  constructor(props: EmptyObject) {
    super(props);
    this.state = {
      results: [],
    };
  }

  handleSearchResults = (results: SearchResult[]) => {
    this.setState({ results });
  };

  render() {
    return (
      <div className="app-container">
        <div className="search-section">
          <Search onSearch={this.handleSearchResults} />
        </div>
        <div className="results-section">
          <SearchInfo resultSearch={this.state.results} />
        </div>
      </div>
    );
  }
}

export default App;
