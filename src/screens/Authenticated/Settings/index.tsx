import { Pressable, View } from 'react-native';
import { Screen, Text } from '@/component';
import { languages } from '@/i18n';
import { useAppDispatch, useAppSelector } from '@/reduxToolkit/hooks';
import { setLanguage } from '@/reduxToolkit/rootSlice';
import { useAppTheme, useStyles } from '@/theme';
import { createStyles } from './styles';

const Settings = () => {
  const { theme } = useAppTheme();
  const styles = useStyles(createStyles);
  const dispatch = useAppDispatch();
  const { language } = useAppSelector(state => state.app);

  return (
    <Screen>
      <Text preset="heading" tx="settingsScreen:title" />
      <Text preset="label" tx="settingsScreen:language" style={styles.sectionLabel} />

      <View style={styles.list}>
        {languages.map(item => {
          const active = language === item.code;
          return (
            <Pressable
              key={item.code}
              style={[styles.row, active ? styles.rowActive : styles.rowInactive]}
              onPress={() => dispatch(setLanguage(item.code))}>
              <Text
                text={item.label}
                color={active ? theme.colors.palette.neutral100 : theme.colors.text}
              />
            </Pressable>
          );
        })}
      </View>
    </Screen>
  );
};

export default Settings;
