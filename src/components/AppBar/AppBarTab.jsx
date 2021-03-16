import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Link } from 'react-router-native';
import Text from '../Text';

const AppBarTab = ({ onPress, children, style, link, ...props }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} {...props}>
      <Link to={link}>
        <Text color='textWhite' fontWeight='bold' style={style}>{children}</Text>
      </Link>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;