import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import theme from '../theme';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
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

const SignInForm = ({ onSignIn, loading }) => {
  return (
    <View>
      <FormikTextInput name="username" label="Username" autoCapitalize="none" autoCorrect={false} />
      <FormikTextInput name="password" label="Password" autoCapitalize="none" autoCorrect={false}
        secureTextEntry style={styles.marginTop} />
      <Button mode='contained' onPress={onSignIn} loading={loading} disabled={loading} style={styles.marginTop}>
        Sign in
      </Button>
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
  const onRegisterButtonClick = () => {
    history.push('/sign-up');
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSignIn} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onSignIn={handleSubmit} loading={loading} />}
      </Formik>

      {/* ToDo: Add a Right Arrow icon */}
      <Button mode='contained' color={theme.colors.successGreen} dark={true} onPress={onRegisterButtonClick} style={styles.marginTop}>
        Create a New Account
      </Button>
    </View>
  );
};

export default SignIn;