import React from 'react';
import { View, StyleSheet } from 'react-native';
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
  marginLeft: {
    marginLeft: theme.margin.small
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab link="/" onPress={() => alert('Pressed Repositories')}>
        Repositories
      </AppBarTab>

      <AppBarTab link="/sign-in" style={styles.marginLeft}>
        Sign In
      </AppBarTab>
    </View>
  );
};

export default AppBar;