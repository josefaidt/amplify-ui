import {
  BackgroundColors,
  BorderColors,
  Colors,
  ColorScale,
  FontColors,
} from '../types';

const font: FontColors = {
  primary: { value: '{colors.neutral.100.value}' },
  secondary: { value: '{colors.neutral.90.value}' },
  tertiary: { value: '{colors.neutral.80.value}' },
  inverse: { value: '{colors.white.value}' },

  interactive: { value: '{colors.brand.primary.80.value}' },
  hover: { value: '{colors.brand.primary.90.value}' },
  focus: { value: '{colors.brand.primary.90.value}' },
  active: { value: '{colors.brand.primary.100.value}' },

  info: { value: '{colors.blue.80.value}' },
  warning: { value: '{colors.orange.80.value}' },
  error: { value: '{colors.red.80.value}' },
  success: { value: '{colors.green.80.value}' },
};

const red: ColorScale = {
  10: { value: 'hsl(0, 75%, 95%)' },
  20: { value: 'hsl(0, 75%, 85%)' },
  40: { value: 'hsl(0, 75%, 75%)' },
  60: { value: 'hsl(0, 50%, 50%)' },
  80: { value: 'hsl(0, 95%, 30%)' },
  90: { value: 'hsl(0, 100%, 20%)' },
  100: { value: 'hsl(0, 100%, 15%)' },
};

const orange: ColorScale = {
  10: { value: 'hsl(30, 75%, 95%)' },
  20: { value: 'hsl(30, 75%, 85%)' },
  40: { value: 'hsl(30, 75%, 75%)' },
  60: { value: 'hsl(30, 50%, 50%)' },
  80: { value: 'hsl(30, 95%, 30%)' },
  90: { value: 'hsl(30, 100%, 20%)' },
  100: { value: 'hsl(30, 100%, 15%)' },
};

const yellow: ColorScale = {
  10: { value: 'hsl(30, 75%, 95%)' },
  20: { value: 'hsl(30, 75%, 85%)' },
  40: { value: 'hsl(30, 75%, 75%)' },
  60: { value: 'hsl(30, 50%, 50%)' },
  80: { value: 'hsl(30, 95%, 30%)' },
  90: { value: 'hsl(30, 100%, 20%)' },
  100: { value: 'hsl(30, 100%, 15%)' },
};

const green: ColorScale = {
  10: { value: 'hsl(30, 75%, 95%)' },
  20: { value: 'hsl(30, 75%, 85%)' },
  40: { value: 'hsl(30, 75%, 75%)' },
  60: { value: 'hsl(30, 50%, 50%)' },
  80: { value: 'hsl(30, 95%, 30%)' },
  90: { value: 'hsl(30, 100%, 20%)' },
  100: { value: 'hsl(30, 100%, 15%)' },
};

const teal: ColorScale = {
  10: { value: 'hsl(30, 75%, 95%)' },
  20: { value: 'hsl(30, 75%, 85%)' },
  40: { value: 'hsl(30, 75%, 75%)' },
  60: { value: 'hsl(30, 50%, 50%)' },
  80: { value: 'hsl(30, 95%, 30%)' },
  90: { value: 'hsl(30, 100%, 20%)' },
  100: { value: 'hsl(30, 100%, 15%)' },
};

const blue: ColorScale = {
  10: { value: 'hsl(30, 75%, 95%)' },
  20: { value: 'hsl(30, 75%, 85%)' },
  40: { value: 'hsl(30, 75%, 75%)' },
  60: { value: 'hsl(30, 50%, 50%)' },
  80: { value: 'hsl(30, 95%, 30%)' },
  90: { value: 'hsl(30, 100%, 20%)' },
  100: { value: 'hsl(30, 100%, 15%)' },
};

const purple: ColorScale = {
  10: { value: 'hsl(30, 75%, 95%)' },
  20: { value: 'hsl(30, 75%, 85%)' },
  40: { value: 'hsl(30, 75%, 75%)' },
  60: { value: 'hsl(30, 50%, 50%)' },
  80: { value: 'hsl(30, 95%, 30%)' },
  90: { value: 'hsl(30, 100%, 20%)' },
  100: { value: 'hsl(30, 100%, 15%)' },
};

const pink: ColorScale = {
  10: { value: 'hsl(30, 75%, 95%)' },
  20: { value: 'hsl(30, 75%, 85%)' },
  40: { value: 'hsl(30, 75%, 75%)' },
  60: { value: 'hsl(30, 50%, 50%)' },
  80: { value: 'hsl(30, 95%, 30%)' },
  90: { value: 'hsl(30, 100%, 20%)' },
  100: { value: 'hsl(30, 100%, 15%)' },
};

const neutral: ColorScale = {
  10: { value: 'hsl(210, 5%, 95%)' },
  20: { value: 'hsl(210, 5%, 90%)' },
  40: { value: 'hsl(210, 5%, 80%)' },
  60: { value: 'hsl(210, 6%, 70%)' },
  80: { value: 'hsl(210, 10%, 40%)' },
  90: { value: 'hsl(210, 25%, 25%)' },
  100: { value: 'hsl(210, 50%, 10%)' },
};

const background: BackgroundColors = {
  primary: { value: '{colors.white.value}' },
  secondary: { value: '{colors.neutral.10.value}' },
  tertiary: { value: '{colors.neutral.20.value}' },

  info: { value: '{colors.blue.20.value}' },
  warning: { value: '{colors.orange.20.value}' },
  error: { value: '{colors.red.20.value}' },
  success: { value: '{colors.green.20.value}' },
};

const border: BorderColors = {
  primary: { value: '{colors.neutral.60.value}' },
  secondary: { value: '{colors.neutral.40.value}' },
  tertiary: { value: '{colors.neutral.20.value}' },
};

export const colors: Colors = {
  red,
  orange,
  yellow,
  green,
  teal,
  blue,
  purple,
  pink,
  neutral,

  font,
  background,
  border,
};
