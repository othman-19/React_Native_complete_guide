import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
} from 'react-native';

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [entredGoal, setEntredGoal] = useState('');

  const goalInputHandler = entredText => {
    setEntredGoal(entredText);
  };
  const addGoalHandler = () => {
    onAddGoal(entredGoal);
    setEntredGoal('');
  };
  const cancelGoalHandler = () => {
    onCancel();
    setEntredGoal('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={entredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color="red"
              title="CANCEl"
              onPress={cancelGoalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={addGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '40%',
  },
});

export default GoalInput;
