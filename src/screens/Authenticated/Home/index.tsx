import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Button, Screen, Text } from '@/component';
import { useAppSelector } from '@/reduxToolkit/hooks';
import { colors } from '@/theme';
import { styles } from './styles';

const Home = () => {
  const navigation = useNavigation();
  const { user } = useAppSelector(state => state.app);

  return (
    <Screen scroll>
      <Animated.View entering={FadeInDown.duration(500)}>
        <Text preset="heading" tx="homeScreen:title" />
        <Text
          preset="subheading"
          text={user?.name ?? ''}
          color={colors.textDim}
          style={styles.name}
        />
        <Text preset="default" tx="homeScreen:welcome" style={styles.welcome} />
      </Animated.View>

      <View style={styles.detailsButtonWrapper}>
        <Button
          tx="homeScreen:viewDetails"
          onPress={() => navigation.navigate('Lesson')}
        />
      </View>
    </Screen>
  );
};

export default Home;
