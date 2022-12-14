import React from 'react';
import MobileNavigation from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';
import { useMediaQuery } from '@hooks';

const Nav: React.FC = () => {
  const width = useMediaQuery();
  return (
    <>
      {width > 980
        ? <DesktopHeader/>
        : <MobileNavigation/>
      }
    </>
  );
};

const Header = React.memo(Nav);
export { Header };
