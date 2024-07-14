import React, { useState, useCallback, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const { page } = useParams<{ page: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const pageNumber = page ? parseInt(page, 10) : 1;
    setCurrentPage(pageNumber);
  }, [page]);

  const handleSearchResults = useCallback((results: SearchResult[], pages: number) => {
    setSearchResults(results);
    setTotalPages(pages);
    setIsLoading(false);
  }, []);

  const handleLoadingState = useCallback((loading: boolean) => {
    setIsLoading(loading);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    navigate(`/search/${page}`);
  }, [navigate]);

  return (
    <ErrorBoundary>
      <div className={style.app_container}>
        <div className={style.search_section}>
          <Search
            onSearch={handleSearchResults}
            setLoading={handleLoadingState}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
        <div className={style.results_section}>
          <SearchInfo
            resultSearch={searchResults}
            isLoading={isLoading}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;
