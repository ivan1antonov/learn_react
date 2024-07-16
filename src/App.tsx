import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import style from './App.module.css';
import Search from './components/Search/Search';
import SearchInfo from './components/Search/SearchInfo';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

interface SearchResult {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
}

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const detailRef = useRef<HTMLDivElement>(null);
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
    navigate(`/page/${page}`);
  }, [navigate]);

  const handleDetailClick = useCallback((id: string) => {
    const selectedResult = searchResults.find(result => result.name === id);
    if (selectedResult) {
      navigate(`/detail/${id}`, { state: { detail: selectedResult } });
      setShowDetail(true);
    }
  }, [navigate, searchResults]);

  const handleOutsideClick = useCallback((event: MouseEvent) => {
    if (detailRef.current && !detailRef.current.contains(event.target as Node)) {
      setShowDetail(false);
    }
  }, []);

  useEffect(() => {
    if (showDetail) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showDetail, handleOutsideClick]);

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
            onDetailClick={handleDetailClick}
          />
          {showDetail && (
            <div className={style.detail_section} ref={detailRef}>
              <Outlet />
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;
