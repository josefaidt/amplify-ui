/**
 * Setting DesignToken type to any right now because Style Dictionary expects
 * it to be an object with a `value` attribute, but in
 */
type DesignToken = any;

type ShadowDesignToken = {};

export interface ColorScale {
  10: DesignToken;
  20: DesignToken;
  40: DesignToken;
  60: DesignToken;
  80: DesignToken;
  90: DesignToken;
  100: DesignToken;
}

export interface OrdinalScale {
  primary: DesignToken;
  secondary: DesignToken;
  tertiary: DesignToken;
}

export interface OrdinalVariation {
  info: DesignToken;
  warning: DesignToken;
  error: DesignToken;
  success: DesignToken;
}

export interface FontColors extends OrdinalScale, OrdinalVariation {
  inverse: DesignToken;
  interactive: DesignToken;
  hover: DesignToken;
  focus: DesignToken;
  active: DesignToken;
}

export interface BackgroundColors extends OrdinalScale, OrdinalVariation {}

export interface BorderColors extends OrdinalScale {}

export interface Colors {
  red: ColorScale;
  orange: ColorScale;
  yellow: ColorScale;
  green: ColorScale;
  teal: ColorScale;
  blue: ColorScale;
  purple: ColorScale;
  pink: ColorScale;
  neutral: ColorScale;

  font: FontColors;
  background: BackgroundColors;
  border: BorderColors;

  //
  [key: string]: any;
}

interface BorderWidths {}
interface Fonts {}
interface FontSizes {}
interface FontWeights {}
interface LineHeights {}
interface Opacities {}
interface Radii {}
interface Shadows {}
interface Space {}
interface Time {}

interface AlertTheme {}

export interface AmplifyTheme {
  borderWidths: BorderWidths;
  colors: Colors;
  fonts: Fonts;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  lineHeights: LineHeights;
  opacities: Opacities;
  radii: Radii;
  shadows: Shadows;
  space: Space;
  time: Time;
  components: {
    alert: AlertTheme;
  };
}
