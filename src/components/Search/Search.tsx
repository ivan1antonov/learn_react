import React, { useState, useEffect } from 'react';
import style from './Search.module.css';
import Label from './Label/Label';
import Input from './Input/Input';
import Button from './Button/Button';

interface SearchResult {
  name: string;
  description?: string;
  birth_year: string;
  gender: string;
  skin_color: string;
}

interface SearchProps {
  onSearch: (results: SearchResult[]) => void;
}

const Search: React.FC<SearchProps> = (props: SearchProps) => {
  const savedSearchTerm = localStorage.getItem('searchTerm') || '';
  const [searchTerm, setSearchTerm] = useState<string>(savedSearchTerm);

  const handleSearch = () => {
    const trimmedSearchTerm = searchTerm.trim();
    localStorage.setItem('searchTerm', trimmedSearchTerm);
    fetch(`https://swapi.dev/api/people/?search=${trimmedSearchTerm}`)
      .then(responce => {
        return responce.json();
      })
      .then(data => {
        props.onSearch(data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const url = savedSearchTerm
      ? `https://swapi.dev/api/people/?search=${savedSearchTerm}`
      : `https://swapi.dev/api/people`;
    fetch(url)
      .then(responce => responce.json())
      .then(data => {
        props.onSearch(data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [savedSearchTerm, props]);
  return (
    <div>
      <form
        className={style.search_form}
        onSubmit={e => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <Label htmlFor="search" />
        <Input
          type="search"
          id="search"
          name="searchField"
          onChange={handleInputSearch}
          value={searchTerm}
        />
        <Button type="submit" onClick={handleSearch} />
      </form>
    </div>
  );
};

export default Search;
