import styled, { keyframes } from 'styled-components';
import { IoMenu } from 'react-icons/io5';

const breatheAnimation = keyframes`
  0% {width: 0; display: flex}
`;
const breatheOutAnimation = keyframes`
  100% {width: 0; opacity: 0; visibility: hidden}
`;

const MobileNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Menu = styled(IoMenu)`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 36px;
`;
// TO BE REPLACED

interface Props {
  isShow: boolean
};
const NavList = styled.div`
  position: absolute;
  z-index: 999;
  left: 0;
  top: 62px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: white;
  animation: ${({ isShow }: Props) => isShow ? breatheAnimation : breatheOutAnimation} linear;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;

  a{
    padding: 20px;
  font-size: 14px;
  text-decoration: none;
  font-family: 'ComfortaaRegular';
  color: ${({ theme }) => theme.colors.textColor};
  border-bottom: 1px solid #E7EBFB;
  }
`;

export { MobileNavWrapper, Menu, NavList };
