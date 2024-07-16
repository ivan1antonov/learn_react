import React from 'react';
import SearchItem from './SearchItem/SearchItem';
import loader from '../../assets/loader.gif';
import style from './SearchInfo.module.css';
import Pagination from './Pagination';

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

interface SearchInfoProps {
  resultSearch: SearchResult[];
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onDetailClick: (id: string) => void;
}

const SearchInfo: React.FC<SearchInfoProps> = ({
  resultSearch,
  isLoading,
  currentPage,
  totalPages,
  onPageChange,
  onDetailClick,
}) => {
  return (
    <>
      {isLoading ? (
        <div className={style.loader}>
          <img className={style.loader_img} src={loader} alt="loading" />
        </div>
      ) : resultSearch && resultSearch.length > 0 ? (
        <>
          <SearchItem resultSearch={resultSearch} onDetailClick={onDetailClick} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </>
      ) : (
        <div>No results found</div>
      )}
    </>
  );
};

export default SearchInfo;
