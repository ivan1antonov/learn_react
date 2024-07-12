import React, { useState, useCallback } from 'react';
import style from './App.module.css';
import Search from './components/Search/Search';
import SearchInfo from './components/Search/SearchInfo';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

interface SearchResult {
  name: string;
  description?: string;
  birth_year: string;
  gender: string;
  skin_color: string;
}

const App: React.FC = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearchResults = useCallback((results: SearchResult[]) => {
    setResults(results);
  }, []);

  const handleLoadingState = useCallback((loading: boolean) => {
    setLoading(loading);
  }, []);

  return (
    <ErrorBoundary>
      <div className={style.app_container}>
        <div className={style.search_section}>
          <Search onSearch={handleSearchResults} setLoading={handleLoadingState} />
        </div>
        <div className={style.results_section}>
          <SearchInfo resultSearch={results} isLoading={loading} />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;
