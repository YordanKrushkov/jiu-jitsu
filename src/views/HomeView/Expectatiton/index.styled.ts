import { tablet } from '@constants';
import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 80%;
  margin: 50px auto 10px;
  box-sizing: border-box;
  ${tablet({ width: '90%' })};

  *{
      box-sizing: border-box;
    }
`;
export const Image = styled.div` 
  height: 700px;
  padding: 20px;
  ${tablet({ display: 'none', padding: '0' })}


  img{
    height: 100%;
    filter: sepia(1);
  }
`;
export const TextWrapper = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
  text-transform: uppercase;
  font-family: 'ComfortaaExtraBold';
  h2{
    margin-bottom:2px;
    ${tablet({ fontSize: '22px' })};

  }
  h1{
    color: ${({ theme }) => theme.colors.red};
    font-size: 52px;
    margin: 5px;
    ${tablet({ fontSize: '25px' })}
  }
`;
export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    transform: skew(-20deg);
    box-sizing: border-box;
    background: ${({ theme }) => theme.colors.lightBlue};
    color: ${({ theme }) => theme.colors.textColor};
  
      ${tablet({ width: '90%', margin: '20px auto 0', transform: 'skew(-10deg)' })};

      h1{
        font-size: 24px;
        transform: skew(20deg);
        ${tablet({ fontSize: '20px', transform: 'skew(10deg)' })}

      }
      p{
        font-size: 12px;
        transform: skew(20deg);
        padding: 0 10px;
      ${tablet({ fontSize: '10px', transform: 'skew(10deg)' })}

      }
`;
export const Icon = styled.div<{ second?: boolean }>`
      position: relative;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 100px;
      min-height: 80px;
      z-index: 999;
      box-sizing: border-box;
      background: ${({ theme, second }) => second ? theme.colors.red : theme.colors.textColor};
      ${tablet({ minWidth: '50px', minHeight: '50px', right: '5px' })}

      svg{
        color: white;
        font-size: 48px;
        ${tablet({ fontSize: '26px' })};
      }
`;
