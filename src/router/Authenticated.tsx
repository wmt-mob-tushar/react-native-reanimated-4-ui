import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { translate } from '@/i18n/translate';
import Home from '@/screens/Authenticated/Home';
import Profile from '@/screens/Authenticated/Profile';
import Settings from '@/screens/Authenticated/Settings';
import { useAppTheme, useStyles } from '@/theme';
import { MainTabParamList } from './navigationTypes';
import { createTabStyles } from './styles';

const Tab = createBottomTabNavigator<MainTabParamList>();

const icons: Record<keyof MainTabParamList, string> = {
  Home: 'home-outline',
  Profile: 'person-outline',
  Settings: 'settings-outline',
};

const renderTabBarIcon =
  (routeName: keyof MainTabParamList) =>
  ({ color, size }: { color: string; size: number }) => (
    <Icon name={icons[routeName]} color={color} size={size} />
  );

const Authenticated = () => {
  const { theme } = useAppTheme();
  const styles = useStyles(createTabStyles);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.tint,
        tabBarInactiveTintColor: theme.colors.textDim,
        tabBarStyle: styles.tabBar,
        tabBarIcon: renderTabBarIcon(route.name),
      })}>
      <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: translate('tabs:home') }} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarLabel: translate('tabs:profile') }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ tabBarLabel: translate('tabs:settings') }}
      />
    </Tab.Navigator>
  );
};

export default Authenticated;
