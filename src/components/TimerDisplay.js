import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TimerDisplay = ({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return <Text style={styles.timerText}>{formattedTime}</Text>;
};

const styles = StyleSheet.create({
  timerText: {
    fontSize: 40,
  },
});

export default TimerDisplay;
