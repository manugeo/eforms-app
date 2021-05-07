import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import theme from '../theme';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import FormikSelectInput from './FormikSelectInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import useRegister from '../hooks/useRegister';
import useSignIn from '../hooks/useSignIn';

const NAME_PATTERN = /^[A-Za-z ,.'-]+$/;
// Todo: Load user types from clientinfo api call.
const USER_TYPES = [
  {
    id: 3,
    name: 'Applicant'
  }
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: theme.padding.normal,
    marginTop: 1
  },
  marginTop: {
    marginTop: theme.margin.normal
  }
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  confirmEmail: '',
  password: '',
  confirmPassword: '',
  userType: ''
};
const validationSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required')
    .max(30, 'Maximum 30 characters')
    .matches(NAME_PATTERN, 'Invalid First Name'),
  lastName: yup.string().required('Last Name is required')
    .max(30, 'Maximum 30 characters')
    .matches(NAME_PATTERN, 'Invalid Last Name'),
  email: yup.string().required('Email is required')
    .min(6, 'Minimum 6 characters')
    .max(50, 'Maximum 50 characters')
    .email('Email is not valid'),
  confirmEmail: yup.string().required('Confirming Email is required')
    .test('email-match', 'Emails do not match', (value, context) => {
      return (value === context.parent.email);
    }),
  password: yup.string().required('Password is required')
    .min(8, 'Minimum 8 characters'),
  confirmPassword: yup.string().required('Confirming password is required')
    .test('password-match', 'Passwords do not match', (value, context) => {
      return (value === context.parent.password);
    }),
  userType: yup.string().required('User Type is required')
});

const RegistrationForm = ({ onRegiter, loading }) => {
  const selectOptions = USER_TYPES.map(userType => {
    return { name: userType.name, value: userType.id };
  });
  return (
    // Todo: Add middle name input as well.
    <View>
      <FormikTextInput name="firstName" label="First Name" style={styles.marginTop} />
      <FormikTextInput name="lastName" label="Last Name" style={styles.marginTop} />
      <FormikTextInput name="email" label="Email (Also your username)" autoCapitalize="none"
        textContentType='emailAddress' autoCorrect={false} style={styles.marginTop} />
      <FormikTextInput name="confirmEmail" label="Confirm Email" autoCapitalize="none"
        textContentType='emailAddress' autoCorrect={false} style={styles.marginTop} />
      <FormikTextInput name="password" label="Password" autoCapitalize="none"
        textContentType='newPassword' autoCorrect={false} secureTextEntry style={styles.marginTop} />
      <FormikTextInput name="confirmPassword" label="Confirm Password" autoCapitalize="none"
        textContentType='newPassword' autoCorrect={false} style={styles.marginTop} />
      <FormikSelectInput name="userType" label="User Type" options={selectOptions} style={styles.marginTop} />
      <Button mode="contained" color={theme.colors.successGreen} dark={true} onPress={onRegiter} loading={loading} disabled={loading} style={styles.marginTop}>
        Create a New Account
      </Button>
    </View>
  );
};

const Registration = ({ setIsSignedIn }) => {
  const { register, loading } = useRegister();
  const { signIn, loading: signInLoading } = useSignIn();
  const onRegiter = async (values) => {
    console.log('About to register...', values);

    if (loading) return;
    const { firstName, lastName, email, password, userType } = values;
    try {
      const data = await register({ firstName, lastName, email, password, userType });
      if (!data.programUser) {
        alert(data.message);
      }
      else {
        console.log('Registration successful!', data);

        // Loging in using new credentials.
        try {
          const data = await signIn({ username: email, password });
          if (data.error) {
            alert(data.message);
          }
          else {
            setIsSignedIn(true);
          }
        } catch (e) {
          console.log(e);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Text fontSize="heading" >Register</Text>

      <Formik initialValues={initialValues} onSubmit={onRegiter} validationSchema={validationSchema}>
        {({ handleSubmit }) => <RegistrationForm onRegiter={handleSubmit} loading={loading || signInLoading} />}
      </Formik>
    </ScrollView>
  );
};

export default Registration;