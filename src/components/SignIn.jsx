import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import theme from '../theme';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import useSignIn from '../hooks/useSignIn';

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
    borderRadius: 4,
    padding: theme.padding.normal,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  disabledSignInButton: {
    backgroundColor: theme.colors.secondary
  }
});

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
});

const SignInForm = ({ onSubmit, loading }) => {
  const signInButtonStyle = [styles.signInButton, styles.marginTop, (loading && styles.disabledSignInButton)];
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" autoCapitalize="none" autoCorrect={false} />
      <FormikTextInput name="password" placeholder="Password" autoCapitalize="none" autoCorrect={false}
        secureTextEntry style={styles.marginTop} />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text color="textWhite" fontSize="subheading" fontWeight="bold" style={signInButtonStyle}>Sign in</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = ({ setIsSignedIn }) => {
  const { signIn, loading } = useSignIn();
  const onSubmit = async (values) => {
    if (loading) return;
    const { username, password } = values;
    try {
      const data = await signIn({ username, password });
      if (data.error) {
        alert(data.message);
      }
      else {
        setIsSignedIn(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} loading={loading} />}
      </Formik>
    </View>
  );
};

export default SignIn;