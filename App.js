import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button,
} from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const onAddGoal = entredGoal => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: entredGoal,
      },
    ]);
    setIsAddMode(false);
  };

  const onDelete = goalId => {
    setCourseGoals(currentGoals => currentGoals.filter(goal => goal.id !== goalId));
  };

  const onCancel = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={onAddGoal}
        onCancel={onCancel}
      />

      <FlatList
        keyExtractor={item => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={onDelete}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
