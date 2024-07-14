import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
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
  onSearch: (results: SearchResult[], totalPages: number) => void;
  setLoading: (loading: boolean) => void;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch, setLoading, currentPage, onPageChange }) => {
  const navigate = useNavigate();
  const savedSearchTerm = localStorage.getItem('searchTerm') || '';
  const [searchTerm, setSearchTerm] = useState<string>(savedSearchTerm);

  const handleSearch = useCallback(() => {
    const trimmedSearchTerm = searchTerm.trim();
    localStorage.setItem('searchTerm', trimmedSearchTerm);
    setLoading(true);
    fetch(`https://swapi.dev/api/people/?search=${trimmedSearchTerm}&page=${1}`)
      .then(response => response.json())
      .then(data => {
        onSearch(data.results, Math.ceil(data.count / 10));
        setLoading(false);
        onPageChange(1);
        navigate(`/search/1`);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [searchTerm, onSearch, setLoading, onPageChange, navigate]);

  const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const url = savedSearchTerm
      ? `https://swapi.dev/api/people/?search=${savedSearchTerm}&page=${currentPage}`
      : `https://swapi.dev/api/people/?page=${currentPage}`;
    setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        onSearch(data.results, Math.ceil(data.count / 10));
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [savedSearchTerm, currentPage, onSearch, setLoading]);

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
