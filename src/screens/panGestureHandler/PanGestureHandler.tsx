import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const PanGestureHandler = () => {
  const cardXProgress = useSharedValue(0);
  const cardYProgress = useSharedValue(0);
  const progressContext = useSharedValue({x: 0, y: 0});

  const followX = useDerivedValue(() => {
    return withSpring(cardXProgress.value)
  })

  const followY = useDerivedValue(() => {
    return withSpring(cardYProgress.value)
  })

  const gesture = Gesture.Pan()
    .onStart(() => {
      progressContext.value = {x: cardXProgress.value, y: cardYProgress.value};
    })
    .onUpdate(event => {
      (cardXProgress.value = progressContext.value.x + event.translationX),
        (cardYProgress.value = progressContext.value.y + event.translationY);
    });

  const cardAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: followX.value},
        {translateY: followY.value},
      ],
    };
  });
  return (
    <View style={styles.container}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.card, cardAnimation]} />
      </GestureDetector>
    </View>
  );
};

export default PanGestureHandler;
