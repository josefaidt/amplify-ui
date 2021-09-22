import { useContext } from 'react';

import { AmplifyContext } from '../components/AmplifyProvider/AmplifyContext';

export const useTheming = () => {
  const { theme } = useContext(AmplifyContext);

  return theme;
};
