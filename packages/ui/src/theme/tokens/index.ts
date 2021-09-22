import { AmplifyTheme } from '../types/theme';
import { borderWidths } from './borderWidths';
import { colors } from './colors';
import { fontSizes } from './fontSizes';
import { fontWeights } from './fontWeights';
import { radii } from './radii';
import { space } from './space';

export const defaultTheme: AmplifyTheme = {
  components: require('./components'),
  borderWidths,
  breakpoints: require('./breakpoints'),
  colors,
  fonts: require('./fonts'),
  fontSizes,
  fontWeights,
  lineHeights: require('./lineHeights'),
  opacities: require('./opacities'),
  outlineOffsets: require('./outlineOffsets'),
  outlineWidths: require('./outlineWidths'),
  radii,
  shadows: require('./shadows'),
  space,
  time: require('./time'),
  transforms: require('./transforms'),
};
