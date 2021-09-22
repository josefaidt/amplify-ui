import { DesignToken } from './designToken';

export interface Space {
  xxs: DesignToken;
  xs: DesignToken;
  small: DesignToken;
  medium: DesignToken;
  large: DesignToken;
  xl: DesignToken;
  xxl: DesignToken;
  xxxl: DesignToken;

  //creating a second set of sizes using em which will be sized relative to a parent instead of the root
  relative: {
    xxs: DesignToken;
    xs: DesignToken;
    small: DesignToken;
    medium: DesignToken;
    large: DesignToken;
    xl: DesignToken;
    xxl: DesignToken;
    xxxl: DesignToken;
  };
}
