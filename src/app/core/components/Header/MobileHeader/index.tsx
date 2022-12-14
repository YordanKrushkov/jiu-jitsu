import React, { useState } from 'react';
import { MobileNavWrapper, Menu } from './index.styled';
import NavLinks from './navlinks';
import { Logo } from '../index.styled';
import bjj from '@assets/images/bjjLogo.png';

const MobileNavigation: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const setShowMenuHandler = (): void => {
    if (showMenu) {
      setIsShow(false);
      setTimeout(() => { setShowMenu(false); }, 200);
    } else {
      setIsShow(true);
      setShowMenu(true);
    }
  };

  return (
    <MobileNavWrapper>
      <Menu onClick={setShowMenuHandler}/>
      <Logo>
        <img src={bjj} alt='logo'/>
      </Logo>
      <div></div>
      {showMenu && <NavLinks isShow={isShow} toggleHandler={setShowMenuHandler} />}
    </MobileNavWrapper>
  );
};

export default MobileNavigation;
