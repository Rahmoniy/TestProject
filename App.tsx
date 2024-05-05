import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigator from './src/navigators';
import {NavigationContainer} from '@react-navigation/native';
import NavigationService from './src/navigators/NavigationService';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store';
import {Provider} from 'react-redux';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/i18n';
import 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <I18nextProvider i18n={i18n()}>
      <Provider store={store}>
        <StatusBar
          backgroundColor="#088395"
          translucent
          barStyle="light-content"
        />
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer ref={NavigationService._navigator}>
            <AppNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </I18nextProvider>
  );
}

export default App;
