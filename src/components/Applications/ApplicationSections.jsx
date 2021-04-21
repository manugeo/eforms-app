import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import useApplication from '../../hooks/useApplication';
import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: theme.margin.normal
  },
  applicationTitle: {
    backgroundColor: theme.colors.white,
    padding: theme.padding.normal,
    textAlign: 'center'
  },
  sectionsText: {
    marginTop: theme.margin.small,
    backgroundColor: theme.colors.white,
    padding: theme.padding.normal,
    textAlign: 'center'
  },
  sectionItem: {
    backgroundColor: theme.colors.white,
    padding: theme.padding.normal,
    borderTopWidth: 1,
    borderTopColor: theme.colors.secondary
  }
});

const SectionItem = ({ name, number }) => {
  return (
    <Text fontSize="subHeading" fontWeight="bold" style={styles.sectionItem}>{`${number}. ${name}`}</Text>
  );
};

const ApplicationSections = () => {
  const params = useParams();
  const { documentId } = params;
  const { currentApplication } = useApplication(documentId);

  return currentApplication ? (
    <View style={styles.container}>
      <Text fontSize="bigHeading" fontWeight="bold" style={styles.applicationTitle}>{currentApplication.forms.name}</Text>
      <Text fontSize="heading" fontWeight="bold" style={styles.sectionsText}>Sections</Text>
      {currentApplication.forms.sections.map((section, index) => {
        return <SectionItem key={index} name={section.name} number={index + 1} />;
      })}
    </View>
  ) : null;
};

export default ApplicationSections;
