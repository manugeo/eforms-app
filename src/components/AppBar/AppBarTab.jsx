import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Text from '../Text';

const AppBarTab = ({ onPress, style, children, ...props }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={style} {...props}>
      <Text color='textWhite'>{children}</Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;