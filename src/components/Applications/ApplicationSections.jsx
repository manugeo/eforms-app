import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useParams } from 'react-router-native';
import useApplication from '../../hooks/useApplication';
import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    marginTop: 1
  },
  applicationTitle: {
    backgroundColor: theme.colors.white,
    padding: theme.padding.normal,
    textAlign: 'center'
  },
  sectionsText: {
    marginTop: 1,
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
    <ScrollView style={styles.container}>
      <Text fontSize="bigHeading" fontWeight="bold" style={styles.applicationTitle}>{currentApplication.forms.name}</Text>
      <Text fontSize="heading" fontWeight="bold" style={styles.sectionsText}>Sections</Text>
      {currentApplication.forms.sections.map((section, index) => {
        return <SectionItem key={index} name={section.name} number={index + 1} />;
      })}
    </ScrollView>
  ) : null;
};

export default ApplicationSections;
