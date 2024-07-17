import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Search.module.css';
import Label from './Label/Label';
import Input from './Input/Input';
import Button from './Button/Button';
import useSearchQuery from '../hooks/useSearchQuery';

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

interface SearchProps {
  onSearch: (results: SearchResult[], totalPages: number) => void;
  setLoading: (loading: boolean) => void;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch, setLoading, currentPage, onPageChange }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useSearchQuery();

  const handleSearch = useCallback(() => {
    const trimmedSearchTerm = searchTerm.trim();
    setLoading(true);
    fetch(`https://swapi.dev/api/people/?search=${trimmedSearchTerm}&page=${1}`)
      .then(response => response.json())
      .then(data => {
        onSearch(data.results, Math.ceil(data.count / 10));
        setLoading(false);
        onPageChange(1);
        navigate(`/page/1`);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [searchTerm, onSearch, setLoading, onPageChange, navigate]);

  const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const url = searchTerm
      ? `https://swapi.dev/api/people/?search=${searchTerm}&page=${currentPage}`
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
  }, [searchTerm, currentPage, onSearch, setLoading]);

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
