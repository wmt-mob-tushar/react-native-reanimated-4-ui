import { ActivityIndicator, View } from 'react-native';
import { useAppTheme, useStyles } from '@/theme';
import { createStyles } from './styles';

const Splash = () => {
  const { theme } = useAppTheme();
  const styles = useStyles(createStyles);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.tint} />
    </View>
  );
};

export default Splash;
