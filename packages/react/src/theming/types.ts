export { AmplifyTheme as Theme } from '@aws-amplify/ui';

export type DeepPartial<T> = {
  [K in keyof T]?: DeepPartial<T[K]>;
};
