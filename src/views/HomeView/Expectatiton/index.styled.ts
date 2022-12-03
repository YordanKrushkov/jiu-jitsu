import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 80%;
  margin: 50px auto 10px;
`;
export const Image = styled.div` 
  height: 700px;
  padding: 20px;
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
    margin-bottom:2px
  }
  h1{
    color: ${({ theme }) => theme.colors.red};
    font-size: 52px;
    margin: 5px;
  }
`;
export const Card = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      transform: skew(-20deg);
      background: ${({ theme }) => theme.colors.lightBlue};
      color: ${({ theme }) => theme.colors.textColor};
      h1{
        font-size: 24px;
        transform: skew(20deg);
      }
      p{
        font-size: 12px;
        transform: skew(20deg);
        padding: 0 10px;
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
      background: ${({ theme, second }) => second ? theme.colors.red : theme.colors.textColor};

      svg{
        color: white;
        font-size: 48px;
      }
`;
