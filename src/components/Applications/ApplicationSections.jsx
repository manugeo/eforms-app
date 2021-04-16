import React from 'react';
import { View, StyleSheet } from 'react-native';
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

const application = {
  forms: {
    name: "Frisco Education Foundation Mini-Grant Application 2021",
    sections: [
      {
        name: "Classroom Application"
      },
      {
        name: "Accounting Budget Page"
      },
      {
        name: " About Funding"
      },
      {
        name: "About Project"
      },
      {
        name: "Co-Applicants"
      },
      {
        name: "About Budget"
      },
      {
        name: "Principal Approval"
      },
      {
        name: "Principal/Supervisor Approval Form"
      },
      {
        name: "Technology Approval Form"
      },
      {
        name: "Curriculum Approval Form"
      }
    ]
  }
};

const SectionItem = ({ name, number }) => {
  return (
    <Text fontSize="subHeading" fontWeight="bold" style={styles.sectionItem}>{`${number}. ${name}`}</Text>
  );
};

const ApplicationSections = () => {
  return (
    <View style={styles.container}>
      <Text fontSize="bigHeading" fontWeight="bold" style={styles.applicationTitle}>{application.forms.name}</Text>
      <Text fontSize="heading" fontWeight="bold" style={styles.sectionsText}>Sections</Text>
      {application.forms.sections.map((section, index) => {
        return <SectionItem key={index} name={section.name} number={index + 1} />;
      })}
    </View>
  );
};

export default ApplicationSections;
