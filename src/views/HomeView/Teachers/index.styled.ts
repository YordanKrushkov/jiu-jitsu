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
  margin-top: 150px;

  img{
    height: 100%;
    filter: sepia(1);

  }
`;
export const TextWrapper = styled.div`
  text-align: center;
  text-transform: uppercase;
  h2{
    margin-bottom:2px;
    color: ${({ theme }) => theme.colors.red};
    font-family: 'ComfortaaExtraBold';

  }
  h1{
    font-family: 'ComfortaaExtraBold';
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 52px;
    margin: 5px 0 24px;
  }
  div{
    margin-top: 60px;
  }
  h3{
    color: ${({ theme }) => theme.colors.red};
    font-size: 36px;
  }
  p{
    text-transform: none;
    text-align: left;
  }
`;
