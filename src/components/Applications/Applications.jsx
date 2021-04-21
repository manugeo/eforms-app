import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import theme from '../../theme';
import TextInput from '../TextInput';
import ApplicationItem from './ApplicationItem';
import useApplications from '../../hooks/useApplications';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: theme.margin.normal
  },
  searchInput: {
    backgroundColor: theme.colors.white,
    borderWidth: 0,
    borderRadius: 0
  },
  separator: {
    height: theme.margin.normal,
  },
  list: {
    marginTop: theme.margin.normal
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const Applications = () => {
  const [searchText, setSearchText] = useState('');
  const { applications } = useApplications();

  // These application's name includes search param.
  const appsByName = applications.filter(app => app.form.name.toLowerCase().includes(searchText.toLowerCase()));
  // These application's name doesn't includes search param but their descriptions does.
  const appsByDescription = applications.filter(app => {
    return !appsByName.includes(app) && (app.form.description.toLowerCase().includes(searchText.toLowerCase()));
  });
  const filteredApplications = [...appsByName, ...appsByDescription];

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={text => setSearchText(text)}
        style={styles.searchInput}
        placeholder="Search Applications"
        value={searchText}
      />

      <FlatList
        data={filteredApplications}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ApplicationItem application={item} />}
        keyExtractor={(application, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
};

export default Applications;