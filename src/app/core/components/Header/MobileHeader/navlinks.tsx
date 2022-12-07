import React from 'react';
import { ROUTES } from '@constants';
import { NavList } from './index.styled';
import { NavLink } from 'react-router-dom';
interface Props {
  isShow: boolean
};
const NavLinks: React.FC<Props> = ({ isShow }: Props) => {
  const routes = [
    { path: ROUTES.ABOUT_PAGE, name: 'График' },
    { path: ROUTES.PORTFOLIO, name: 'Цени' },
    { path: ROUTES.CONTACTS, name: 'За нас' },
    { path: ROUTES.CONTACTS, name: 'Галерия' },
    { path: ROUTES.CONTACTS, name: 'Контакти' }
  ];

  const activeStyle = {
    textDecoration: 'none',
    color: 'red',
    transition: '0.4s'
  };

  return (
    <NavList isShow={isShow}>
      {routes.map(x =>
        <NavLink key={x.path} to={x.path} style={({ isActive }) => isActive ? activeStyle : undefined}>
          {x.name}
        </NavLink>
      )}
    </NavList>
  );
};

export default NavLinks;
