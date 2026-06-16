import { View } from 'react-native';
import { Button, Screen, Text } from '@/component';
import { useAppDispatch, useAppSelector } from '@/reduxToolkit/hooks';
import { logout } from '@/reduxToolkit/rootSlice';
import { useAppTheme, useStyles } from '@/theme';
import { createStyles } from './styles';

const Profile = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppTheme();
  const styles = useStyles(createStyles);
  const { user } = useAppSelector(state => state.app);

  return (
    <Screen>
      <Text preset="heading" tx="profileScreen:title" />
      <Text
        preset="default"
        text={user?.email ?? ''}
        color={theme.colors.textDim}
        style={styles.email}
      />
      <View style={styles.footer}>
        <Button tx="common:logOut" variant="outline" onPress={() => dispatch(logout())} />
      </View>
    </Screen>
  );
};

export default Profile;
