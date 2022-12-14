import React, { MouseEventHandler } from 'react';
import { routes } from '@core/data';
import { NavList } from './index.styled';
import { NavLink } from 'react-router-dom';
interface Props {
  isShow: boolean
  toggleHandler: MouseEventHandler
};
const NavLinks: React.FC<Props> = ({ isShow, toggleHandler }: Props) => {
  const activeStyle = {
    textDecoration: 'none',
    color: 'red',
    transition: '0.4s'
  };

  return (
    <NavList isShow={isShow}>
      {routes.map(x =>
        <NavLink key={x.path} to={x.path} style={({ isActive }) => isActive ? activeStyle : undefined} onClick={toggleHandler}>
          {x.name}
        </NavLink>
      )}
    </NavList>
  );
};

export default NavLinks;
