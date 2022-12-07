import { useState, useEffect, useCallback } from 'react';

export const useMediaQuery = (): number => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = useCallback((): void => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => window.addEventListener('resize', handleResize), []);

  return windowWidth;
};
