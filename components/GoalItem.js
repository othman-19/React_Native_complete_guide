import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

const GoalItem = ({ title, onDelete }) => (
  <TouchableHighlight onPress={() => onDelete()}>
    <View style={styles.listItem}>
      <Text>
        {title}
      </Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;
