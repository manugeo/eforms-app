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

const AppBar = ({ isSignedIn, setIsSignedIn }) => {
  const onSignOut = () => setIsSignedIn(false);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        {isSignedIn ? (
          <>
            <AppBarTab onPress={() => alert('Pressed Repositories')}>
              Repositories
            </AppBarTab>
            <AppBarTab onPress={onSignOut} style={styles.marginLeft}>
              Sign out
            </AppBarTab>
          </>
        ) : (
          <AppBarTab>
            Sign in
          </AppBarTab>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;