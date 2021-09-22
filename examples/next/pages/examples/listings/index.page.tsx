import {
  Button,
  Collection,
  IconAccountCircle,
  Image,
  Text,
  View,
  generateCss,
  defaultTheme,
  createTheme,
  AmplifyProvider,
} from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import { experiences, places } from './data';
import { ExperienceCard } from './ExperienceCard';
import { ListingCard } from './ListingCard';
import { SectionHeading } from './SectionHeading';

const theme = createTheme(
  {
    tokens: {
      colors: {
        brand: {
          primary: defaultTheme.colors.green,
        },
      },
    },
    overrides: {
      dark: {
        tokens: {
          // components: {
          //   heading: {
          //     color: { value: 'blue '}
          //   }
          // },
          colors: {
            background: {
              primary: { value: '{colors.neutral.10}' },
            },
            // font: {
            //   primary: { value: 'red'}
            // },
            neutral: {
              100: { value: 'hsl(210, 5%, 95%)' },
              90: { value: 'hsl(210, 5%, 90%)' },
              80: { value: 'hsl(210, 5%, 80%)' },
              60: { value: 'hsl(210, 6%, 70%)' },
              40: { value: 'hsl(210, 10%, 40%)' },
              20: { value: 'hsl(210, 25%, 25%)' },
              10: { value: 'hsl(210, 50%, 10%)' },
            },
          },
        },
      },
    },
  },
  defaultTheme
);

// generateCss(theme);

function App() {
  const [loaded, setLoaded] = useState(false);
  const [dark, setDark] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoaded(true);
  //   }, 4000);
  // });
  const changeTheme = () => {
    setDark(!dark);
  };
  // document.body.className = dark ? theme.overrides.dark : theme;
  // console.log(theme);
  // Using the CSS variables outside of the this scope won't work
  // https://www.w3.org/TR/css-variables-1/#cycles
  return (
    <AmplifyProvider
      theme={theme}
      currentTheme={dark ? theme.overrides.dark : ''}
    >
      <div>
        <header className="listing-app-header">
          <Image src="/listing-logo.svg" alt="lystifying" />

          <input type="search" placeholder="search" />

          <Button variation="link" size="large" onClick={changeTheme}>
            <IconAccountCircle />
          </Button>
        </header>

        <View padding={theme.space.xxl}>
          {/* <Button variation="primary">BUTTON</Button> */}
          <SectionHeading
            title="Discover Experiences"
            subtitle="Unique activities with local experts—in person or online."
          />
          <Collection
            type="list"
            direction={{ base: 'column', large: 'row' }}
            alignItems="stretch"
            padding={`0 0 ${theme.space.xxl} 0`}
            items={experiences}
          >
            {(item) => (
              <ListingCard {...item} key={item.title} isLoaded={loaded} />
            )}
          </Collection>

          <SectionHeading
            title="Vacation rentals for every style"
            subtitle="Get the amount of space that is right for you"
          />
          <Collection
            type="list"
            direction="row"
            alignItems="stretch"
            padding={`0 0 ${theme.space.xxl} 0`}
            items={places}
          >
            {(item) => (
              <ExperienceCard
                key={item.title}
                img={item.img}
                title={item.title}
              />
            )}
          </Collection>
        </View>

        <footer className="listing-app-footer">
          <Text color={theme.colors.font.tertiary}>
            © 2021 Lystifying (not a real company)
          </Text>
        </footer>
      </div>
    </AmplifyProvider>
  );
}

export default App;
