import styled from 'styled-components';

export const Image = styled.div` 
position: relative;
  width: 100%;
  background-color: blue;
  height: 80vh;
  box-shadow: 0 2px 7px 1px rgba(0,0,0,0.5);
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: sepia(1);
  }
`;
export const TextWrapper = styled.div`
  position: absolute;
  bottom: 35%;
  right: 10%;
  color: ${({ theme }) => theme.colors.red};
  text-align: center;
  font-family: 'ComfortaaExtraBold';
  h1{
    text-transform: uppercase;
    font-size: 34px;
    margin-bottom: 10px;
  }
  h4{
    font-size: 30px;
    margin-top: 5px;
  }
`;

export const Button = styled.button`
    font-family: 'ComfortaaBold';
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.red};
    border: 2px solid ${({ theme }) => theme.colors.red};
    background-color: transparent;
    padding: 15px ;
    font-size: 30px;
    border-radius: 2px;

    &:hover{
      cursor: pointer;
      transition: 0.3s;
      color: white;
      border: 2px solid white;

    }
  `;
