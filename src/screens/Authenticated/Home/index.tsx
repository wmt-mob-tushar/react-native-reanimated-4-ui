import { Screen, Text } from '@/component';
import { useAppSelector } from '@/reduxToolkit/hooks';
import { useAppTheme, useStyles } from '@/theme';
import { createStyles } from './styles';

const Home = () => {
  const { theme } = useAppTheme();
  const styles = useStyles(createStyles);
  const {user} = useAppSelector(state => state.app);

  return (
    <Screen>
      <Text preset="heading" tx="homeScreen:title" />
      <Text
        preset="subheading"
        text={user?.name ?? ''}
        color={theme.colors.textDim}
        style={styles.name}
      />
      <Text preset="default" tx="homeScreen:welcome" style={styles.welcome} />
    </Screen>
  );
};

export default Home;
