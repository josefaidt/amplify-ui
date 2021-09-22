import { createContext, ReactNode } from 'react';
import { defaultTheme, AmplifyTheme, ThemeConfig } from '@aws-amplify/ui';

// import { defaultCSSVariables } from '../../theming';

interface AmplifyContextType {
  components?: Record<string, ReactNode>;
  theme?: ThemeConfig;
}
export const AmplifyContext = createContext<AmplifyContextType>({
  components: undefined,
  theme: {
    tokens: defaultTheme,
  },
});
