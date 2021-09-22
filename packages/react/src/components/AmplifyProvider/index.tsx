import { ReactNode } from 'react';
import { AmplifyTheme, ThemeConfig, CreatedTheme } from '@aws-amplify/ui';
import { AmplifyContext } from './AmplifyContext';
import { defaultTheme, defaultCSSVariables, generateCss } from '../../theming';

interface AmplifyProviderProps {
  children: ReactNode;
  components: Record<string, ReactNode>;
  theme?: ThemeConfig;
  currentTheme?: string;
}
export function AmplifyProvider({
  children,
  components,
  currentTheme,
  theme = { tokens: defaultTheme },
}: AmplifyProviderProps) {
  // generateCSS needs to only run once
  // probably need a better way to do this. We could have the user
  //
  generateCss(theme);

  // Then we need to update a data attribute on the root element
  // for theme switches. Because CSS variables can reference each other,
  // we should build the entire theme with overrides in CSS once, and then
  // trigger updates via className or data attribute updates or media queries
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = currentTheme;
  }

  return (
    <AmplifyContext.Provider
      value={{
        components,
        theme,
      }}
    >
      <div data-amplify-theme="">{children}</div>
    </AmplifyContext.Provider>
  );
}
