import { ActivityIndicator, View } from 'react-native';
import { colors } from '@/theme';
import { styles } from './styles';

const Splash = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.tint} />
    </View>
  );
};

export default Splash;
