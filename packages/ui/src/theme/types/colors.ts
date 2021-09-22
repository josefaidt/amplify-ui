import { DesignToken } from './designToken';
import { OrdinalScale, OrdinalVariation } from './scales';

export interface ColorScale {
  10: DesignToken;
  20: DesignToken;
  40: DesignToken;
  60: DesignToken;
  80: DesignToken;
  90: DesignToken;
  100: DesignToken;
}

export interface FontColors extends OrdinalScale, OrdinalVariation {
  inverse: DesignToken;
  interactive: DesignToken;
  hover: DesignToken;
  focus: DesignToken;
  active: DesignToken;
  disabled: DesignToken;
}

export interface BackgroundColors extends OrdinalScale, OrdinalVariation {
  disabled: DesignToken;
}

export interface BorderColors extends OrdinalScale {}

export interface Colors {
  // base color palette
  red: ColorScale;
  orange: ColorScale;
  yellow: ColorScale;
  green: ColorScale;
  teal: ColorScale;
  blue: ColorScale;
  purple: ColorScale;
  pink: ColorScale;
  neutral: ColorScale;
  white: DesignToken;
  black: DesignToken;

  // Semantic colors
  font: FontColors;
  background: BackgroundColors;
  border: BorderColors;

  // escape hatch to allow customers to add arbitrary colors
  [key: string]: any;
}
