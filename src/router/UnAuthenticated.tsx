import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@/screens/UnAuthenticated/Login';
import { UnAuthStackParamList } from './navigationTypes';

const Stack = createNativeStackNavigator<UnAuthStackParamList>();

const UnAuthenticated = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

export default UnAuthenticated;
