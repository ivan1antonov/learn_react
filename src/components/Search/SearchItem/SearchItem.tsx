import React from 'react';
import style from './SearchItem.module.css';

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

const SearchInfoItem: React.FC<SearchInfoProps> = ({ resultSearch }) => {
  return (
    <div>
      <div className={style.searchinfo}>
        {resultSearch.map((el, index) => (
          <div className={style.searchinfo_item} key={index}>
            <h3>{el.name}</h3>
            <p>birth year: {el.birth_year}</p>
            <p>gender: {el.gender}</p>
            <p>skin color: {el.skin_color}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchInfoItem;
