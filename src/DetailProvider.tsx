import React, { useState, ReactNode } from 'react';
import { DetailContext } from './DetailContext';

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

export const DetailProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [details, setDetails] = useState<SearchResult | null>(null);

  return (
    <DetailContext.Provider value={{ details, setDetails }}>
      {children}
    </DetailContext.Provider>
  );
};
