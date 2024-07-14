import React from 'react';
import SearchItem from './SearchItem/SearchItem';
import loader from '../../assets/loader.gif';
import style from './SearchInfo.module.css';
import Pagination from './Pagination';

interface SearchResult {
  name: string;
  description?: string;
  birth_year: string;
  gender: string;
  skin_color: string;
}

interface SearchInfoProps {
  resultSearch: SearchResult[];
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const SearchInfo: React.FC<SearchInfoProps> = ({ resultSearch, isLoading, currentPage, totalPages, onPageChange }) => {
  return (
    <>
      {isLoading ? (
        <div className={style.loader}>
          <img className={style.loader_img} src={loader} alt="loading" />
        </div>
      ) : resultSearch && resultSearch.length > 0 ? (
        <>
          <SearchItem resultSearch={resultSearch} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </>
      ) : (
        <div>No results found</div>
      )}
    </>
  );
};

export default SearchInfo;
