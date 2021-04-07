import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBar from './AppBar/AppBar';
import headerImage from '../images/eforms-header.png';

const headerImageUri = Image.resolveAssetSource(headerImage).uri;

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: 'white'
  },
  imageWrapper: {
    alignItems: 'center'
  },
  headerImage: {
    width: 240,
    height: 78
  }
});

const Header = ({ isSignedIn, setIsSignedIn }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: headerImageUri }} style={styles.headerImage} />
      </View>

      <AppBar isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
    </View>
  );
};

export default Header;
