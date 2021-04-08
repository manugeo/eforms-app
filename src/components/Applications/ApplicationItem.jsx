import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: theme.padding.normal
  },
  headerRow: {
    alignItems: 'flex-start'
  },
  descriptionRow: {
    marginTop: theme.margin.normal
  },
  footerRow: {
    marginTop: theme.margin.small,
    borderTopWidth: 1,
    borderTopColor: theme.colors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.padding.normal
  },
  actionButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: theme.padding.small,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});

const ApplicationItem = ({ application }) => {
  const getActionButtonText = () => {
    if (application.id == '0') {
      return "Apply";
    }
    if (application.state && application.state.id !== 1) return "View Application";
    if (application.pastDeadline) return "View Application";
    return "Continue";
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text fontSize="heading" fontWeight="bold">{application.form.name}</Text>
        <Text color="textSecondary">{`Opening Time: ${application.form.openingDate || ''}`}</Text>
        <Text color="textSecondary">{`Closing Time: ${application.form.closingDate || ''}`}</Text>
      </View>
      <View style={styles.descriptionRow}>
        <Text>{application.form.description}</Text>
      </View>
      <View style={styles.footerRow}>
        <Text color="textSecondary" fontSize="subHeading" fontWeight="bold">
          {application.state ? application.state.name : 'Not Started'}
        </Text>
        <TouchableWithoutFeedback onPress={() => console.log(application)}>
          <Text color="textWhite" fontSize="subheading" fontWeight="bold" style={styles.actionButton}>
            {getActionButtonText()}
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default ApplicationItem;
