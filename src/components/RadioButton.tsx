import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../styles/Colors';

type IPropsType = {
  selected: boolean;
};

const RadioButton: React.FC<IPropsType> = ({selected}) => {
  return (
    <TouchableOpacity style={styles.circle}>
      <View
        style={[selected ? {...styles.selected} : {...styles.unselected}]}
      />
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  circle: {
    height: 16,
    width: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    width: 8,
    height: 8,
    borderRadius: 20,
    backgroundColor: Colors.black,
  },
  unselected: {
    backgroundColor: Colors.white,
  },
});
