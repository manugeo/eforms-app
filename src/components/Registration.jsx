import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import theme from '../theme';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';

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
  confirmPassword: ''
};
const validationSchema = yup.object().shape({});

const RegistrationForm = ({ onRegiter }) => {
  const registerButtonStyle = [styles.registerButton, styles.marginTop];
  return (
    <View>
      <FormikTextInput name="firstName" placeholder="First Name" style={styles.marginTop} />
      <FormikTextInput name="lastName" placeholder="Last Name" style={styles.marginTop} />
      <FormikTextInput name="email" placeholder="Email (Also your username)" autoCapitalize="none"
        autoCorrect={false} style={styles.marginTop} />
      <FormikTextInput name="confirmEmail" placeholder="Confirm Email" autoCapitalize="none"
        autoCorrect={false} style={styles.marginTop} />
      <FormikTextInput name="password" placeholder="Password" autoCapitalize="none"
        autoCorrect={false} secureTextEntry style={styles.marginTop} />
      <FormikTextInput name="confirmPassword" placeholder="Confirm Password" autoCapitalize="none"
        autoCorrect={false} style={styles.marginTop} />
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
    <View style={styles.container}>
      <Text fontSize="heading" >Register</Text>

      <Formik initialValues={initialValues} onSubmit={onRegiter} validationSchema={validationSchema}>
        {({ handleSubmit }) => <RegistrationForm onRegiter={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default Registration;