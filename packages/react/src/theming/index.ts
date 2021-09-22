import { StyleHTMLAttributes } from 'react';

export { defaultCSSVariables, defaultTheme } from './defaultTheming';
export * from './extendTheming';
export * from './types';
export * from './useTheming';

// TODO: type this and stuff
export const generateCss = (theme: any) => {
  if (typeof document !== 'undefined') {
    let sheet: CSSStyleSheet;
    let styles = document.getElementById('amplify-styles');
    if (!styles) {
      styles = document.createElement('style');
      styles.id = 'amplify-styles';
      document.head.appendChild(styles);
      sheet = (styles as HTMLStyleElement).sheet;
    } else {
      sheet = (styles as HTMLStyleElement).sheet;
    }

    sheet.insertRule(`:root, [data-theme] {${theme.css.join('')}}`);
    for (const [key, value] of Object.entries(theme.overrides)) {
      const { css } = value as any;
      sheet.insertRule(`html[data-theme="${key}"] {${css.join('')}}`);
    }
    // theme.overrides.forEach(override => {
    //   const { scope, css } = override;
    //   sheet.insertRule(`.${scope} {${css.join('')}}`);
    // });
  }
};
