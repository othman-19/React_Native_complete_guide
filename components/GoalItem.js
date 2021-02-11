import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const GoalItem = ({ id, title, onDelete }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={() => onDelete(id)}>
    <View style={styles.listItem}>
      <Text>
        {title}
      </Text>
    </View>
  </TouchableOpacity>
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
