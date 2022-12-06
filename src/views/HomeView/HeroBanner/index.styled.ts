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
  transform: skew(-10deg);
  box-sizing: border-box;
  color: white;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1{
    text-transform: uppercase;
    font-size: 42px;
    margin-bottom: 10px;
    transform: skew(10deg);
  }
  h4{
    font-size: 30px;
    margin-top: 5px;
    transform: skew(10deg);

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
    transform: skew(10deg);
    margin-left: 30px;
    border: 2px solid white;
    &:hover{
      cursor: pointer;
      transition: 0.3s;
      color: white;
      border: 2px solid  ${({ theme }) => theme.colors.red};
      color:  ${({ theme }) => theme.colors.red};
      background-color: white;

    }
  `;
