import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    marginTop: theme.margin.normal
  }
});

const Registration = () => {
  return (
    <View style={styles.container}>
      <Text>Registration Page</Text>
    </View>
  );
};

export default Registration;