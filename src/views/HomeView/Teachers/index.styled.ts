import { mobile } from '@constants';
import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 80%;
  margin: 50px auto 10px;
  box-sizing: border-box;

  ${mobile({ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' })}

`;
export const Image = styled.div` 
  height: 700px;
  padding: 20px;
  margin-top: 150px;
  ${mobile({ height: '300px', padding: '10px', marginTop: '50px' })};
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
    ${mobile({ fontSize: '22px' })}

  }
  h1{
    font-family: 'ComfortaaExtraBold';
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 52px;
    margin: 5px 0 24px;
    ${mobile({ fontSize: '25px' })}

  }
  div{
    margin-top: 60px;
  }
  h3{
    color: ${({ theme }) => theme.colors.red};
    font-size: 36px;
    ${mobile({ fontSize: '22px' })}
  }
  p{
    text-transform: none;
    text-align: left;
    ${mobile({ textAlign: 'center' })}

  }
`;
