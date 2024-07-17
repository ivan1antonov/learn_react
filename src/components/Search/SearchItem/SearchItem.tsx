import React from 'react';
import style from './SearchItem.module.css';

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

interface SearchItemProps {
  resultSearch: SearchResult[];
  onDetailClick: (id: string) => void;
}

const SearchItem: React.FC<SearchItemProps> = ({ resultSearch, onDetailClick }) => {
  return (
    <div className={style.searchinfo}>
      {resultSearch.map((el, index) => (
        <div key={index} className={style.searchinfo_item} onClick={() => onDetailClick(el.name)}>
          <h3>{el.name}</h3>
          <p>birth year: {el.birth_year}</p>
          <p>gender: {el.gender}</p>
          <p>skin color: {el.skin_color}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchItem;
