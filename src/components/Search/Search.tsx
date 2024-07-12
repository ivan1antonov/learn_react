import React, { useState, useEffect, useCallback } from 'react';
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
  setLoading: (loading: boolean) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch, setLoading }) => {
  const savedSearchTerm = localStorage.getItem('searchTerm') || '';
  const [searchTerm, setSearchTerm] = useState<string>(savedSearchTerm);

  const handleSearch = useCallback(() => {
    const trimmedSearchTerm = searchTerm.trim();
    localStorage.setItem('searchTerm', trimmedSearchTerm);
    console.log('Starting search with term:', trimmedSearchTerm);
    setLoading(true);
    fetch(`https://swapi.dev/api/people/?search=${trimmedSearchTerm}`)
      .then(response => {
        console.log('Fetch response received');
        return response.json();
      })
      .then(data => {
        console.log('Data parsed:', data);
        onSearch(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [searchTerm, onSearch, setLoading]);

  const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const url = savedSearchTerm
      ? `https://swapi.dev/api/people/?search=${savedSearchTerm}`
      : `https://swapi.dev/api/people`;
    console.log('Initial fetch with URL:', url);
    setLoading(true);
    fetch(url)
      .then(response => {
        console.log('Initial fetch response received');
        return response.json();
      })
      .then(data => {
        console.log('Initial data parsed:', data);
        onSearch(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching initial data:', error);
        setLoading(false);
      });
  }, [savedSearchTerm, onSearch, setLoading]);

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
