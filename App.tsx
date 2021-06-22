import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import light from './src/styles/light';
import Routes from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
}