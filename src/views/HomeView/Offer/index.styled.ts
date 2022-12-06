import styled from 'styled-components';
export const Wrapper = styled.div`
  gap: 20px;
  width: 80%;
  margin: 50px auto 10px;
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
`;

export const CardWrapper = styled.div` 
  display: flex;
  gap: 40px;
  width: 80%;
  margin: 20px auto;
  justify-content: center;
`;
export const Card = styled.div` 
   transform: skew(-10deg);
   background-color: aliceblue;
   display: flex;
   flex-direction: column;
   align-items: center;
   max-width: 280px;
   p{
    transform: skew(10deg);
      text-align: center;
      padding: 0 20px;
  } 
`;
export const Image = styled.div` 
  position: relative;
  height: 260px;
  padding: 20px;
  transform: skew(10deg);

  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: sepia(1);
  }

`;
