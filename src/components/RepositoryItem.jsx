import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: theme.padding.normal
  },
  headerRow: {
    flexDirection: 'row',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 4
  },
  headerDetails: {
    alignItems: 'flex-start',
    paddingLeft: theme.padding.normal
  },
  languageTag: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: theme.padding.small,
    marginTop: theme.margin.small
  },
  countsRow: {
    marginTop: theme.margin.small,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  countItem: {
    alignItems: 'center'
  }
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }}>
        </Image>

        <View style={styles.headerDetails}>
          <Text fontSize="subheading" fontWeight="bold">{item.fullName}</Text>
          <Text color="textSecondary">{item.description}</Text>
          <Text style={styles.languageTag} color="textWhite">{item.language}</Text>
        </View>
      </View>

      <View style={styles.countsRow}>
        <View style={styles.countItem}>
          <Text fontSize="subheading" fontWeight="bold">{item.stargazersCount}</Text>
          <Text color="textSecondary">Stars</Text>
        </View>

        <View style={styles.countItem}>
          <Text fontSize="subheading" fontWeight="bold">{item.forksCount}</Text>
          <Text color="textSecondary">Forks</Text>
        </View>

        <View style={styles.countItem}>
          <Text fontSize="subheading" fontWeight="bold">{item.reviewCount}</Text>
          <Text color="textSecondary">Reviews</Text>
        </View>

        <View style={styles.countItem}>
          <Text fontSize="subheading" fontWeight="bold">{item.ratingAverage}</Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;