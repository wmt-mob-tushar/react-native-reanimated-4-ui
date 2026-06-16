import { Screen, Text } from '@/component';
import { useAppSelector } from '@/reduxToolkit/hooks';
import { colors } from '@/theme';
import { styles } from './styles';

const Home = () => {
  const { user } = useAppSelector(state => state.app);

  return (
    <Screen>
      <Text preset="heading" tx="homeScreen:title" />
      <Text
        preset="subheading"
        text={user?.name ?? ''}
        color={colors.textDim}
        style={styles.name}
      />
      <Text preset="default" tx="homeScreen:welcome" style={styles.welcome} />
    </Screen>
  );
};

export default Home;
