export interface AlertTheme {
  backgroundColor?: string;
  padding?: string;

  info?: {
    backgroundColor?: string;
  };
}

export const alert: AlertTheme = {
  backgroundColor: '{colors.background.tertiary.value}',
};
