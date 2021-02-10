import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
} from 'react-native';

const GoalInput = ({ addGoalHandler }) => {
  const [entredGoal, setEntredGoal] = useState('');

  const goalInputHandler = entredText => {
    setEntredGoal(entredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={entredGoal}
      />
      <Button
        title="ADD"
        onPress={() => addGoalHandler(entredGoal)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
