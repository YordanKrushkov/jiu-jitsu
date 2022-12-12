import { mobile, tablet } from '@constants';
import styled from 'styled-components';

export const Wrapper = styled.div<{ justify: string, width?: number }>`
    display: flex;
    justify-content: ${({ justify }) => justify};
    align-items: flex-start;
    gap: 10px;
    width: ${({ width }) => width ?? 100}%;
    margin: ${({ width }) => width ? '20px auto 0' : '20px 0 0'};
    box-sizing: border-box;
    ${({ justify }) => justify !== 'flex-start' && tablet({ flexDirection: 'column', alignItems: 'center' })}
`;

export const Description = styled.div`
  width: 100%;
  font-family: 'ComfortaaLight';
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textColor};
  ${tablet({ fontSize: '14px' })}
  ${mobile({ fontSize: '8px' })}
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  ${tablet({ width: '100%' })};

  input, textarea, button{
    padding: 10px;
    font-family: 'ComfortaaLight';
    font-size: 24px;
    background-color: ${({ theme }) => theme.colors.primaryColor2};
    outline: none;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.textColor};
    ${tablet({ padding: '10px', fontSize: '14px' })};
    ${mobile({ padding: '10px', fontSize: '10px' })};

    &::placeholder{
      color: ${({ theme }) => theme.colors.card};
   }
  }
`;
export const Input = styled.input`
    width: 100%;
    min-height: 50px;
    border: 1px solid ${({ theme }) => theme.colors.textColor};
`;

export const TextArea = styled.textarea`
   min-height: 180px;
   resize: none;
  ${mobile({ minHeight: '100px' })};
`;

export const Button = styled.button`
   width: 20%;
   align-self: flex-end;
   background-color: transparent !important;
   border-color: ${({ theme }) => theme.colors.textColor};
   color: ${({ theme }) => theme.colors.textColor} !important;
   &:hover{
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
   };
`;
export const SocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-self: center;
    width: 40%;
    margin: 20px auto;
    color: ${({ theme }) => theme.colors.textColor};
   ${tablet({ margin: '10px', width: 'auto' })};
   p{
      text-align: center;
      font-family: 'ComfortaaLight';
      font-style: italic;
      font-size: 36px;
      ${tablet({ fontSize: '18px' })};
      ${mobile({ fontSize: '18px' })};
   }
`;
export const Social = styled.div`
   display: flex;
   align-self: center;
   justify-content: center;
   justify-self: center;
   gap: 15px;
   margin-left: 20px;
   color: ${({ theme }) => theme.colors.textColor};
   ${tablet({ gap: '10px' })};
   svg{
      font-size: 46px;
   ${mobile({ fontSize: '28px' })};
      &:hover{
      cursor: pointer;
      color: ${({ theme }) => theme.colors.textColor};
    }
   }
`;
export const Map = styled.div`
   width: 80%;
   margin: 0 auto;
   #map{
      box-sizing: border-box;
      width: 100%;
   }
`;
