import { createGlobalStyle } from 'styled-components';
import ComfortaaRegular from './Comfortaa-Regular.ttf';
import ComfortaaLight from './Comfortaa-Light.ttf';
import ComfortaaMedium from './Comfortaa-Medium.ttf';
import ComfortaaSemiBold from './Comfortaa-SemiBold.ttf';
import ComfortaaBold from './Comfortaa-Bold.ttf';
import Poiret from './PoiretOne-Regular.ttf';
import Rubik from './RubikMonoOne-Regular.ttf';

export const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'ComfortaaRegular';
  src: url(${ComfortaaRegular});
  font-weigh: 400;
}
@font-face {
  font-family: 'ComfortaaLight';
  src: url(${ComfortaaLight});
  font-weight: 500;
}
@font-face {
  font-family: 'ComfortaaMedium';
  src: url(${ComfortaaMedium});
}
@font-face {
  font-family: 'ComfortaaSemiBold';
  src: url(${ComfortaaSemiBold});
}
@font-face {
  font-family: 'ComfortaaBold';
  src: url(${ComfortaaBold});
}
@font-face {
  font-family: 'Poiret';
  src: url(${Poiret});
}
@font-face {
  font-family: 'Rubik';
  src: url(${Rubik});
}
`;
