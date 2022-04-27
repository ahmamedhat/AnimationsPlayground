import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/EvilIcons';

const App = () => {
  const progress = useSharedValue(0);
  const [pressed, setPressed] = useState(false);
  const colorAnimation = useDerivedValue(() => {
    return pressed ? withTiming(0) : withTiming(1);
  }, [pressed]);

  const colorRStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      colorAnimation.value,
      [0, 1],
      ['white', 'black'],
    );
    return {backgroundColor};
  }, [pressed]);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: withSpring(`${progress.value}deg`)}],
    };
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setPressed(!pressed);
          progress.value = withSequence(
            withTiming(-50, {duration: 80}),
            withRepeat(withTiming(50, {duration: 200}), 4, true),
            withTiming(0, {duration: 80}),
          );
        }}>
        <Animated.View style={[styles.shape, reanimatedStyle, colorRStyle]}>
          <Icon name="bell" size={70} color="green" />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9c1aff',
  },

  shape: {
    justifyContent: 'center',
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 0.2,
    shadowOffset: {height: 10, width: 0},
  },
});

export default App;
