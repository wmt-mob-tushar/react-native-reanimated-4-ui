import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Button, Screen, Text } from '@/component';
import { translate } from '@/i18n/translate';
import { useAppDispatch } from '@/reduxToolkit/hooks';
import { setToken, setUser } from '@/reduxToolkit/rootSlice';
import { useAppTheme, useStyles } from '@/theme';
import { isValidEmail } from '@/utils';
import { createStyles } from './styles';

const Login = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppTheme();
  const styles = useStyles(createStyles);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onLogin = () => {
    if (!isValidEmail(email)) {
      setError(translate('errors:invalidEmail'));
      return;
    }
    setError('');
    dispatch(setUser({ id: '1', name: email.split('@')[0], email }));
    dispatch(setToken('demo-token'));
  };

  return (
    <Screen scroll>
      <Text preset="heading" tx="loginScreen:title" />
      <Text
        preset="default"
        tx="loginScreen:subtitle"
        color={theme.colors.textDim}
        style={styles.subtitle}
      />

      <Text preset="label" tx="loginScreen:emailFieldLabel" style={styles.label} />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder={translate('loginScreen:emailFieldPlaceholder')}
        placeholderTextColor={theme.colors.textDim}
      />

      <Text preset="label" tx="loginScreen:passwordFieldLabel" style={styles.label} />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder={translate('loginScreen:passwordFieldPlaceholder')}
        placeholderTextColor={theme.colors.textDim}
      />

      {error ? (
        <Text preset="label" text={error} color={theme.colors.error} style={styles.error} />
      ) : null}

      <View style={styles.footer}>
        <Button tx="loginScreen:tapToLogIn" onPress={onLogin} />
      </View>
    </Screen>
  );
};

export default Login;
