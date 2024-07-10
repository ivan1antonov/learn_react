import React from 'react';
import style from './App.module.css';
import Search from './components/Search/Search';
import SearchInfo from './components/Search/SearchInfo';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorButton from './components/ErrorBoundary/ErrorButton';

interface SearchResult {
  name: string;
  description?: string;
  birth_year: string;
  gender: string;
  skin_color: string;
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
      <ErrorBoundary>
        <div className={style.app_container}>
          <div className={style.search_section}>
            <Search onSearch={this.handleSearchResults} />
          </div>
          <div className={style.results_section}>
            <SearchInfo resultSearch={this.state.results} />
          </div>
          <ErrorButton />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
