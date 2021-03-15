import React from 'react';
import { View, Text } from 'react-native';

// const styles = StyleSheet.create({
//   separator: {
//     height: 10,
//   },
// });

const RepositoryItem = ({ item }) => {
  return (
    <View >
      <Text>{`Full Name : ${item.fullName}`}</Text>
      <Text>{`Description : ${item.description}`}</Text>
      <Text>{`Language : ${item.language}`}</Text>
      <Text>{`Stars : ${item.stargazersCount}`}</Text>
      <Text>{`Forks : ${item.forksCount}`}</Text>
      <Text>{`Reviews : ${item.reviewCount}`}</Text>
      <Text>{`Rating : ${item.ratingAverage}`}</Text>
    </View>
  );
};

export default RepositoryItem;