import React from 'react';
import SearchItem from './SearchItem/SearchItem';

interface SearchResult {
  name: string;
  description?: string;
  birth_year: string;
  gender: string;
  skin_color: string;
}

interface SearchInfoProps {
  resultSearch: SearchResult[];
}

const SearchInfo: React.FC<SearchInfoProps> = ({ resultSearch }) => {
  return (
    <>
      {resultSearch && resultSearch.length > 0 ? (
        <SearchItem resultSearch={resultSearch} />
      ) : (
        <div></div>
      )}
    </>
  );
};

export default SearchInfo;
