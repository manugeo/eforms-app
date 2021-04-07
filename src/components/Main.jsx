import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Switch, Route, Redirect } from 'react-router-native';
import SignIn from './SignIn.jsx';
import Header from './Header';
import Applications from './Applications/Applications';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackgroundColor
  },
});

const Main = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  if (!isSignedIn) {
    return (
      <View style={styles.container}>
        <Header isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />

        <Switch>
          <Route path="/sign-in" exact>
            <SignIn setIsSignedIn={setIsSignedIn} />
          </Route>
          <Redirect to="/sign-in" />
        </Switch>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />

      <Switch>
        <Route path="/" exact>
          <Applications />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;