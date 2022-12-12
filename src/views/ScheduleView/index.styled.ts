import { laptop, mobile } from '@constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
 width: 60%;
 margin: 0 auto;
 ${laptop({ width: '80%' })}
 ${mobile({ width: '90%' })}
`;
export const Title = styled.h1`
  text-align: center;
  font-family: 'ComfortaaBold';
  margin-bottom: 40px;
  font-size: 36px;
 ${mobile({ fontSize: '26px' })}

`;

export const Day = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.textColor};

  h1{
    font-family: 'ComfortaaBold';
    margin-bottom: 10px;
   font-size: 28px;
   font-weight: bolder;
   ${mobile({ fontSize: '20px' })}

  }
`;
export const Info = styled.div`
  display: flex;
  gap: 40px;
  ${mobile({ gap: '18px' })}

  h4{
      font-size: 24px;
    ${mobile({ fontSize: '16px' })}
  }
`;
export const AffterText = styled.p`
font-family: 'ComfortaaLight';
font-style: italic;
  font-size: 18px;
  ${mobile({ fontSize: '14px' })}
`;
