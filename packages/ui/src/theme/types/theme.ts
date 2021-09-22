import { Colors } from './colors';
import { BorderWidths } from './borderWidths';
import { FontSizes } from './fontSizes';
import { Fonts } from './fonts';

export interface AmplifyTheme {
  colors: Colors;
  borderWidths: BorderWidths;
  fontSizes: FontSizes;
  fonts: Fonts;

  // escape hatch to allow customers to add arbitrary colors
  // TODO: make this a Recursive<DesignToken>
  [key: string]: any;
}

// TODO: export a theme overrides interface which would be a
// recursive Partial of the AmplifyTheme
