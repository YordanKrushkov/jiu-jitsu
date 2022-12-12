import React from 'react';
import MobileNavigation from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';
import { useMediaQuery } from '@hooks';
export const Header: React.FC = () => {
  const width = useMediaQuery();
  return (
    <>
      {width > 680
        ? <DesktopHeader/>
        : <MobileNavigation/>
      }
    </>
  );
};
