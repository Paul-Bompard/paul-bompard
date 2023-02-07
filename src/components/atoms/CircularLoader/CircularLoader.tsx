import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

interface CircularLoaderProps {
  delay?: number;
}

/**
 * @param delay The delay before showing the spinner in seconds
 * */
export const CircularLoader = ({ delay = 0 }: CircularLoaderProps) => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(true), delay * 1000);

    return () => clearTimeout(timeout);
  }, [delay]);

  return showLoader ? <CircularProgress /> : null;
};
