import { Pressable, View } from 'react-native';
import { Screen, Text } from '@/component';
import { languages } from '@/i18n';
import { useAppDispatch, useAppSelector } from '@/reduxToolkit/hooks';
import { setLanguage, setTheme } from '@/reduxToolkit/rootSlice';
import { useAppTheme, useStyles } from '@/theme';
import { ThemeMode } from '@/utils/types';
import { createStyles } from './styles';

const themeOptions: { mode: ThemeMode; tx: 'settingsScreen:light' | 'settingsScreen:dark' }[] = [
  { mode: 'light', tx: 'settingsScreen:light' },
  { mode: 'dark', tx: 'settingsScreen:dark' },
];

const Settings = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppTheme();
  const styles = useStyles(createStyles);
  const { language, theme: mode } = useAppSelector(state => state.app);

  return (
    <Screen scroll>
      <Text preset="heading" tx="settingsScreen:title" />

      <Text preset="label" tx="settingsScreen:theme" style={styles.sectionLabel} />
      <View style={styles.list}>
        {themeOptions.map(option => {
          const active = mode === option.mode;
          return (
            <Pressable
              key={option.mode}
              style={[styles.row, active ? styles.rowActive : styles.rowInactive]}
              onPress={() => dispatch(setTheme(option.mode))}>
              <Text
                tx={option.tx}
                color={active ? theme.colors.palette.neutral100 : theme.colors.text}
              />
            </Pressable>
          );
        })}
      </View>

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
