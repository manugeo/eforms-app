import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import SelectInput from './SelectInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.error
  }
});

const FormikSelectInput = ({ name, options, style, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  const inputStyle = [style];

  return (
    <>
      <SelectInput
        onChangeValue={value => helpers.setValue(value)}
        onDismiss={() => helpers.setTouched(true)}
        value={field.value}
        options={options}
        error={showError}
        style={inputStyle}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikSelectInput;