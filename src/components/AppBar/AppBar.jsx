import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: Constants.statusBarHeight,
    padding: theme.padding.normal,
    backgroundColor: theme.colors.appBarBackgroundColor
  },
  appBarTab: {
    padding: theme.padding.normal
  }
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab onPress={() => alert('Pressed Repositories')}>
        Repositories
      </AppBarTab>
    </View>
  );
};

export default AppBar;