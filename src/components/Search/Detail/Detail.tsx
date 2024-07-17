import React from 'react';
import { useLocation } from 'react-router-dom';
import style from './Detail.module.css';

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

const Detail: React.FC = () => {
  const location = useLocation();
  const detail = location.state?.detail as SearchResult | null;
  

  return detail ? (
    <div className={style.detail_overlay}>
      <div className={style.detail_modal}>
        <h2>Details for {detail.name}</h2>
        <p>Birth Year: {detail.birth_year}</p>
        <p>Eye Color: {detail.eye_color}</p>
        <p>Gender: {detail.gender}</p>
        <p>Hair Color: {detail.hair_color}</p>
        <p>Height: {detail.height}</p>
        <p>Mass: {detail.mass}</p>
        <p>Skin Color: {detail.skin_color}</p>
      </div>
    </div>
  ) : (
    <p>No details available</p>
  );
};

export default Detail;
