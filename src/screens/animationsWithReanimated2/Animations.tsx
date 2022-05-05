import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
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
import styles from './styles';
import { useTheme } from '@react-navigation/native'
import { Theme } from '../../infrastructure/theme';


const Animations = () => {
  const theme = useTheme() as Theme

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
    <View style={styles(theme).container}>
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
        <Animated.View
          style={[styles(theme).shape, reanimatedStyle, colorRStyle]}>
          <Icon name="bell" size={70} color="green" />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default Animations;
