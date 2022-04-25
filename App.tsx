import React, {useEffect, useReducer, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';


const App = () => {
  const progress = useSharedValue(0);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: withSpring(`${progress.value}deg`)}],
      // backgroundColor: progress.value > 0 ? 'gray': 'white'
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.shape, reanimatedStyle]}>
        {/* <Text style = {[{fontSize: 100}]}>+</Text> */}
        <Icon name = 'bell' size = {30} color = 'green'/>
      </Animated.View>
      <TouchableOpacity
      onPress={() => progress.value = withSequence(
        withTiming(-60, { duration: 80 }),
        withRepeat(withTiming(60, { duration: 160 }), 6, true),
        withTiming(0, { duration: 80 })
      )}
        style={{
          marginTop: 50,
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 24}}>Animate</Text>
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
    height: 250,
    width: 250,
    borderRadius: 125,
    backgroundColor: 'white',
    alignItems: 'center'
  },
});

export default App;
