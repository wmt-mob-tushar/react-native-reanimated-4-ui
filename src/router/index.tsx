import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppSelector } from '@/reduxToolkit/hooks';
import { colors } from '@/theme';
import Authenticated from './Authenticated';
import { navigationRef } from './RootNavigation';
import { RootStackParamList } from './navigationTypes';
import UnAuthenticated from './UnAuthenticated';

const Stack = createNativeStackNavigator<RootStackParamList>();

const navTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.tint,
    background: colors.background,
    card: colors.background,
    text: colors.text,
    border: colors.separator,
  },
};

const Navigator = () => {
  const isAuthenticated = useAppSelector(state => !!state.app.token);

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
