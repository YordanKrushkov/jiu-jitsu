import { mobile } from '@constants';
import styled from 'styled-components';
export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;

`;
export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60px;
  ${mobile({ position: 'absolute', left: '0', right: '0', top: '0px', margin: 'auto', height: '50px', width: 'fit-content' })}
  p{
    margin: 0;
  }

  img{
    height: 100%;
    width: 60px;
    ${mobile({ width: '50px' })}

  }
`;
export const Nav = styled.nav`
  display: flex;
  gap: 30px;

  a{
    color: ${({ theme }) => theme.colors.textColor};
    text-decoration: none;
    font-size: 20px;
    text-transform: uppercase;

  }
`;
export const BookNow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const Button = styled.button`
    font-family: 'ComfortaaBold';
    background-color: ${({ theme }) => theme.colors.textColor};
    color: white;
    padding: 10px 15px;
    outline: none;
    font-size: 18px;
    border: none;
    text-transform: uppercase;
    /* box-shadow: ${({ theme }) => theme.styles.boxShadow}; */
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.colors.textColor};
    ${mobile({ padding: '5px 10px', fontSize: '14px' })}
    &:hover{
    cursor: pointer;
    /* box-shadow: ${({ theme }) => theme.styles.boxShadowHover}; */
    border: 1px solid ${({ theme }) => theme.colors.textColor};
    background-color: white;
    color: ${({ theme }) => theme.colors.textColor};
    }
`;
