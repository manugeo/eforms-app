import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme.colors.secondary,
    paddingHorizontal: theme.padding.normal,
    paddingVertical: theme.padding.small,
    fontSize: theme.fontSizes.subheading
  },
  errorInput: {
    borderColor: theme.colors.error
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInput, (error ? styles.errorInput : null), style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;