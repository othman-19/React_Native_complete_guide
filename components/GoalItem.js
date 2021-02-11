import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
} from 'react-native';

const GoalItem = ({ title, onDelete }) => (
  <TouchableNativeFeedback onPress={() => onDelete()}>
    <View style={styles.listItem}>
      <Text>
        {title}
      </Text>
    </View>
  </TouchableNativeFeedback>
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
