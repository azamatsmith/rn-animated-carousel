import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import Main from './src/screens/Home';

// https://github.com/expo/google-fonts/tree/master/font-packages/roboto
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar hidden />
      <Main />
    </>
  );
}

export default App;
