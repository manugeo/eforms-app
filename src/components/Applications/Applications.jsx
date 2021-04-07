import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../theme';
import TextInput from '../TextInput';
import ApplicationList from './ApplicationList';

const Applications = () => {
  const [searchText, setSearchText] = useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: theme.margin.normal
    },
    searchInput: {
      backgroundColor: theme.colors.white,
      borderWidth: 0,
      borderRadius: 0
    }
  });

  const applications = [
    {
      form: {
        name: '1. 2020 J F Allen Scholarship and Teachers Life Bursary Application',
        openingTime: '12/01/2019 12:01:00 AM',
        closingTime: '04/25/2022 07:24:00 PM',
        description: 'J.F. Allen Scholarship Application - The J.F. Allen Scholarship is awarded to students who exemplify excellence, achievement and involvement in their schools and communities while maintaining a minimum of 80% average. Two J.F. Allen Scholarship recipients receive $3,000 each year for up to four years.',
      },
      state: {
        name: 'Submitted'
      },
      id: 3751
    },
    {
      form: {
        name: '2. BBPA National Scholarship Application Form',
        openingTime: '12/01/2019 12:01:00 AM',
        closingTime: '11/30/2019 06:01:00 PM',
        description: 'The BBPA National Scholarship Fund was established in 1986 and is dedicated to supporting and promoting the achievement of academic excellence by Black Canadian youth through an annual scholarship program.',
      },
      state: {
        name: 'Not Submitted'
      },
      id: 3752
    },
    {
      form: {
        name: '3. Test Application November 2020',
        openingTime: '12/01/2019 12:01:00 AM',
        closingTime: '09/12/2022 07:24:00 PM',
        description: 'Testing out Multi Access field contributor section.',
      },
      state: {
        name: 'Not Submitted'
      },
      pastApplicationDeadline: true,
      id: 3973
    }
  ];

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={text => setSearchText(text)}
        style={styles.searchInput}
        placeholder="Search Applications"
        value={searchText}
      />

      <ApplicationList applications={applications} />
    </View>
  );
};

export default Applications;