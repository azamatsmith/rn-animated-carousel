import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Main from './src/screens/Home';

function App() {
  return (
    <>
      <StatusBar hidden />
      <Main />
    </>
  );
}

export default App;
