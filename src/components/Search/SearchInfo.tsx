import React from 'react';
import style from './SearchInfo.module.css';

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
    <div className={style.searchinfo}>
      {resultSearch && resultSearch.length > 0 ? (
        resultSearch.map((el, index) => (
          <div className={style.searchinfo_item} key={index}>
            <h3>{el.name}</h3>
            <p>birth year: {el.birth_year}</p>
            <p>gender: {el.gender}</p>
            <p>skin color: {el.skin_color}</p>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SearchInfo;
