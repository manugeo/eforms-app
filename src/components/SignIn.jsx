import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import theme from '../theme';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: theme.padding.normal,
    marginTop: 1
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
  },
  registrationButton: {
    backgroundColor: theme.colors.successGreen,
    borderRadius: 4,
    padding: theme.padding.normal,
    textAlign: 'center',
    textAlignVertical: 'center'
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

const SignInForm = ({ onSignIn, loading }) => {
  const signInButtonStyle = [styles.signInButton, styles.marginTop, (loading && styles.disabledSignInButton)];
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" autoCapitalize="none" autoCorrect={false} />
      <FormikTextInput name="password" placeholder="Password" autoCapitalize="none" autoCorrect={false}
        secureTextEntry style={styles.marginTop} />
      <TouchableWithoutFeedback onPress={onSignIn}>
        <Text color="textWhite" fontSize="subheading" fontWeight="bold" style={signInButtonStyle}>Sign in</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = ({ setIsSignedIn }) => {
  const { signIn, loading } = useSignIn();
  const history = useHistory();
  const onSignIn = async (values) => {
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
  const registrationButtonStyle = [styles.registrationButton, styles.marginTop];
  const onRegisterButtonClick = () => {
    history.push('/sign-up');
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSignIn} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onSignIn={handleSubmit} loading={loading} />}
      </Formik>

      <TouchableWithoutFeedback onPress={onRegisterButtonClick}>
        <Text color="textWhite" fontSize="subheading" fontWeight="bold" style={registrationButtonStyle}>Create a New Account</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignIn;