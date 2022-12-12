import React from 'react';
import { HeaderWrapper, Logo, Nav, BookNow, Button } from './index.styled';
import { NavLink } from 'react-router-dom';
import bjj from '@assets/images/bjjLogo.png';
import { routes } from '@core/data';

export const DesktopHeader: React.FC = () => {
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
