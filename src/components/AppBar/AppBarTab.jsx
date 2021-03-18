import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Text from '../Text';

const AppBarTab = ({ onPress, children, style, ...props }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} {...props}>
      <Text color='textWhite' fontWeight='bold' style={style}>{children}</Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;