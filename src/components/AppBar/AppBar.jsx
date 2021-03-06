import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useHistory } from 'react-router-native';
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
  const history = useHistory();
  const onApplicationsClick = () => history.push('/');
  const onSignOut = () => setIsSignedIn(false);
  const onSignInClick = () => history.push('/sign-in');
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        {isSignedIn ? (
          <>
            <AppBarTab onPress={onApplicationsClick}>
              Applications
            </AppBarTab>
            <AppBarTab onPress={onSignOut} style={styles.marginLeft}>
              Sign out
            </AppBarTab>
          </>
        ) : (
          <AppBarTab onPress={onSignInClick}>
            Sign in
          </AppBarTab>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;