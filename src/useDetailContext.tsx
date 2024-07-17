import { useContext } from 'react';
import { DetailContext } from './DetailContext';

const useDetailContext = () => {
  const context = useContext(DetailContext);
  if (!context) {
    throw new Error('useDetailContext must be used within a DetailProvider');
  }
  return context;
};

export { useDetailContext };
