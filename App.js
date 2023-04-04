import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import BottomTabNavigation from './app/navigation/bottomnav';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
