import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppSelector } from '@/reduxToolkit/hooks';
import { useAppTheme } from '@/theme';
import Authenticated from './Authenticated';
import { navigationRef } from './RootNavigation';
import { RootStackParamList } from './navigationTypes';
import UnAuthenticated from './UnAuthenticated';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  const { theme } = useAppTheme();
  const isAuthenticated = useAppSelector(state => !!state.app.token);

  const navTheme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: theme.colors.tint,
      background: theme.colors.background,
      card: theme.colors.background,
      text: theme.colors.text,
      border: theme.colors.separator,
    },
  };

  return (
    <NavigationContainer ref={navigationRef} theme={navTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="Authenticated" component={Authenticated} />
        ) : (
          <Stack.Screen name="UnAuthenticated" component={UnAuthenticated} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
