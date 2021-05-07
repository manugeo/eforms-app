import React from 'react';
import { StyleSheet, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import theme from '../theme';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import FormikSelectInput from './FormikSelectInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import useRegister from '../hooks/useRegister';

const NAME_PATTERN = /^[A-Za-z ,.'-]+$/;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: theme.padding.normal,
    marginTop: 1
  },
  marginTop: {
    marginTop: theme.margin.normal
  },
  registerButton: {
    backgroundColor: theme.colors.successGreen,
    borderRadius: 4,
    padding: theme.padding.normal,
    textAlign: 'center',
    textAlignVertical: 'center'
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

const RegistrationForm = ({ onRegiter }) => {
  const registerButtonStyle = [styles.registerButton, styles.marginTop];
  const selectOptions = [
    { name: 'Applicant', value: 'applicant' },
    { name: 'Super User', value: 'superuser' }
  ];
  return (
    <View>
      <FormikTextInput name="firstName" label="First Name" style={styles.marginTop} />
      <FormikTextInput name="lastName" label="Last Name" style={styles.marginTop} />
      <FormikTextInput name="email" label="Email (Also your username)" autoCapitalize="none"
        autoCorrect={false} style={styles.marginTop} />
      <FormikTextInput name="confirmEmail" label="Confirm Email" autoCapitalize="none"
        autoCorrect={false} style={styles.marginTop} />
      <FormikTextInput name="password" label="Password" autoCapitalize="none"
        autoCorrect={false} secureTextEntry style={styles.marginTop} />
      <FormikTextInput name="confirmPassword" label="Confirm Password" autoCapitalize="none"
        autoCorrect={false} style={styles.marginTop} />
      <FormikSelectInput name="userType" label="User Type" options={selectOptions} style={styles.marginTop} />
      <TouchableWithoutFeedback onPress={onRegiter}>
        <Text color="textWhite" fontSize="subheading" fontWeight="bold" style={registerButtonStyle}>
          Create a New Account
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const Registration = () => {
  const onRegiter = () => {
    console.log("Handling Registration...");
  };
  return (
    <ScrollView style={styles.container}>
      <Text fontSize="heading" >Register</Text>

      <Formik initialValues={initialValues} onSubmit={onRegiter} validationSchema={validationSchema}>
        {({ handleSubmit }) => <RegistrationForm onRegiter={handleSubmit} />}
      </Formik>
    </ScrollView>
  );
};

export default Registration;