import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Timer from './src/components/Timer';
import TimerDisplay from './src/components/TimerDisplay';

export default function App() {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      // Handle what should happen when the timer reaches 0
      // For example, you can reset the timer and play a sound
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const toggleTimer = () => {
    setIsActive((prev) => !prev);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(25 * 60);
  };

  return (
    <View style={styles.container}>
      <TimerDisplay time={time} />
      <Timer isActive={isActive} toggleTimer={toggleTimer} resetTimer={resetTimer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
