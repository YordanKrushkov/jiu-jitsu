import { mobile } from '@constants';
import styled from 'styled-components';

export const Image = styled.div` 
position: relative;
  width: 100%;
  height: 80vh;
  box-shadow: 0 2px 7px 1px rgba(0,0,0,0.5);

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(3px) brightness(0.4) sepia(1);

  }
`;
export const TextWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  right: 5%;
  /* background-color: rgba(240,240,240,0.7); */
  box-sizing: border-box;
  color: white;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ top: '10%', left: '0', right: '0', margin: 'auto' })}

  h1{
    text-transform: uppercase;
    font-size: 42px;
    margin-bottom: 10px;
    ${mobile({ fontSize: '22px' })}
  }
  h4{
    font-size: 30px;
    margin-top: 5px;
    ${mobile({ fontSize: '25px' })}

  }
`;

export const Button = styled.button`
    font-family: 'ComfortaaBold';
    text-transform: uppercase;
    color: white;
    border: none;
    background-color: ${({ theme }) => theme.colors.red};
    padding: 15px ;
    font-size: 30px;
    border-radius: 2px;
    margin-left: 30px;
    border: 2px solid white;
    ${mobile({ fontSize: '25px', marginLeft: '0' })}

    &:hover{
      cursor: pointer;
      transition: 0.3s;
      color: white;
      border: 2px solid  ${({ theme }) => theme.colors.red};
      color:  ${({ theme }) => theme.colors.red};
      background-color: white;
    }
  `;
