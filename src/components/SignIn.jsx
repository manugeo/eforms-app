import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import theme from '../theme';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: theme.padding.normal
  },
  marginTop: {
    marginTop: theme.margin.normal
  },
  signInButton: {
    backgroundColor: theme.colors.primary,
    minHeight: 64,
    borderRadius: 4,
    padding: theme.padding.normal,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});

const users = [
  {
    username: 'admin',
    password: 'password'
  },
  {
    username: 'manugeo',
    password: '12345678'
  }
];

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
});

const SignInForm = ({ onSubmit }) => {
  const signInButtonStyle = [styles.signInButton, styles.marginTop,];
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry style={styles.marginTop} />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text color="textWhite" fontSize="subheading" fontWeight="bold" style={signInButtonStyle}>Sign in</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};


const SignIn = ({ setIsSignedIn }) => {
  const onSubmit = (values) => {
    const user = users.find( user => (user.username === values.username) && (user.password === values.password));
    if (user) {
      setIsSignedIn(true);
    }
    else {
      alert("Couldn't find your account!");
    }
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;