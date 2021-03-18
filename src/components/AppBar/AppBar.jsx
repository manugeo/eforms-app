import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    padding: theme.padding.normal,
    backgroundColor: theme.colors.appBarBackgroundColor
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row'
  },
  marginLeft: {
    marginLeft: theme.margin.small
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <AppBarTab link="/" onPress={() => alert('Pressed Repositories')}>
          Repositories
        </AppBarTab>

        <AppBarTab link="/sign-in" style={styles.marginLeft}>
          Sign In
        </AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;