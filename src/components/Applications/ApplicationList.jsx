import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import theme from '../../theme';
import ApplicationItem from './ApplicationItem';

const styles = StyleSheet.create({
  separator: {
    height: theme.margin.normal,
  },
  list: {
    marginTop: theme.margin.normal
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const ApplicationList = ({ applications }) => {
  console.log(applications);
  return (
    <FlatList
      data={applications}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ApplicationItem application={item} />}
      keyExtractor={(application, index) => index.toString()}
      style={styles.list}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    />
  );
};

export default ApplicationList;
