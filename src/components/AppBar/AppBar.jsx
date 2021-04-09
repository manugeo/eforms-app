import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    padding: theme.padding.normal
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
            <AppBarTab onPress={() => alert('Pressed Applications!')}>
              Applications
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