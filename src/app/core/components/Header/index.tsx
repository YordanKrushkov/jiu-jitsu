import { ROUTES } from '@constants';
import React from 'react';
import { HeaderWrapper, Logo, Nav, BookNow, Button } from './index.styled';
import { NavLink } from 'react-router-dom';
import bjj from '@assets/images/bjjLogo.png';
export const Header: React.FC = () => {
  const routes = [
    { path: ROUTES.ABOUT_PAGE, name: 'График' },
    { path: ROUTES.PORTFOLIO, name: 'Цени' },
    { path: ROUTES.CONTACTS, name: 'За нас' },
    { path: ROUTES.CONTACTS, name: 'Новини' },
    { path: ROUTES.CONTACTS, name: 'Галерия' },
    { path: ROUTES.CONTACTS, name: 'Контакти' }
  ];

  const activeStyle = {
    textDecoration: 'none',
    color: 'red',
    transition: '0.4s'
  };

  return (
    <HeaderWrapper>
      <Logo>
        <img src={bjj} alt='logo'/>
      </Logo>
      <Nav>
        {routes.map(x =>
          <NavLink key={x.path} to={x.path} style={({ isActive }) => isActive ? activeStyle : undefined}>
            {x.name}
          </NavLink>
        )}
      </Nav>
      <BookNow>
        <p>0898 968 952</p>
        <Button>Запиши се</Button>
      </BookNow>
    </HeaderWrapper>
  );
};
