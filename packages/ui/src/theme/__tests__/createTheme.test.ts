import { createTheme } from '../createTheme';
import { defaultTheme } from '../index';

describe('@aws-amplify/ui', () => {
  describe('createTheme', () => {
    it('should work without passing a default theme', () => {
      const theme = createTheme({});
      // testing the toString
      expect(`${theme.colors.background.error}`).toEqual(
        'var(--amplify-colors-background-error)'
      );
      expect(theme.colors.background.error.value).toEqual(
        'var(--amplify-colors-red-20)'
      );
    });

    it('should ', () => {});

    it('should', () => {
      const theme = createTheme(
        {
          tokens: {
            colors: {
              font: {
                primary: { value: '#f90' },
              },
            },
          },
          overrides: {
            dark: {
              tokens: {
                colors: {
                  font: {
                    primary: { value: '#00f' },
                  },
                },
              },
            },
          },
        },
        defaultTheme
      );

      console.log(theme.colors.font.primary);
      console.log(theme.overrides.dark.colors.font.primary);
      console.log(`${theme.overrides.dark}`);
      // expect(true).toBeTrue();
    });

    it('should', () => {
      // const theme = createTheme({
      //   colors: {
      //     red: { value: '#f90' },
      //     error: { value: '{colors.red.value}' }
      //   }
      // });
      // const theme = createRNTheme({}, defaultTheme);
      // console.log(`${theme.colors.font.primary}`);
      // expect(true).toBeTrue();
    });
  });
});
