import React from 'react';
import { TextInput as PaperTextInput } from 'react-native-paper';

const TextInput = ({error, ...props }) => {
  return <PaperTextInput mode='outlined' error={error} {...props} />;
};

export default TextInput;