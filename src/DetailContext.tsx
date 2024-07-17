import { createContext } from 'react';

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

interface DetailContextType {
  details: SearchResult | null;
  setDetails: (details: SearchResult) => void;
}

const DetailContext = createContext<DetailContextType | undefined>(undefined);

export { DetailContext };
export type { DetailContextType };
