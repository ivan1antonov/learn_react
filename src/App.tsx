import React from 'react';
import './App.css';
import Search from './components/Search';
// import SearchInfo from './components/SearchInfo';

interface SearchResult {
  name: string;
  description?: string;
}

interface AppState {
  results: SearchResult[];
}

class App extends React.Component<Record<string, never>, AppState> {
  constructor(props: Record<string, never>) {
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
      <>
        <Search onSearch={this.handleSearchResults} />
        {/* <SearchInfo />; */}
      </>
    );
  }
}

export default App;
