import React, { useState } from 'react';
import { Pressable, View, Text } from 'react-native';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAddCounter = () => setCount(count + 1);
  const handleSubtractCounter = () =>  {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View>
      <Pressable onPress={handleSubtractCounter}>
        <Text> - </Text>
      </Pressable>
      <View>
        <Text>{count}</Text>
      </View>
      <Pressable onPress={handleAddCounter}>
        <Text> + </Text>
      </Pressable>
    </View>
  );
};

export default Counter;