import { useEffect, useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { changeLanguage, initI18n } from '@/i18n';
import { useAppSelector } from '@/reduxToolkit/hooks';
import { persistor, store } from '@/reduxToolkit/store';
import Navigator from '@/router';
import Splash from '@/screens/Splash';

const Root = () => {
  const [ready, setReady] = useState(false);
  const language = useAppSelector(state => state.app.language);

  useEffect(() => {
    initI18n().then(() => setReady(true));
  }, []);

  useEffect(() => {
    if (ready) {
      changeLanguage(language);
    }
  }, [language, ready]);

  if (!ready) {
    return <Splash />;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Navigator />
    </>
  );
};

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Splash />} persistor={persistor}>
      <GestureHandlerRootView style={styles.root}>
        <SafeAreaProvider>
          <Root />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </PersistGate>
  </Provider>
);

const styles = StyleSheet.create({
  root: { flex: 1 },
});

export default App;
