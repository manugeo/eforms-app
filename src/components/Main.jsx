import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Switch, Route, Redirect } from 'react-router-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn.jsx';
import AppBar from './AppBar/AppBar';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackgroundColor
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>

        <Route path="/sign-in" exact>
          <SignIn />
        </Route>

        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;