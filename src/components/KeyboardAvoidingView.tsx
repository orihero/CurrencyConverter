import React from 'react';
import {
  KeyboardAvoidingView as View,
  Platform,
  StyleSheet,
  KeyboardAvoidingViewProps,
} from 'react-native';

export const KeyboardAvoidingView = ({
  children,
  style,
  ...props
}: KeyboardAvoidingViewProps) => {
  return (
    <View
      behavior="position"
      enabled
      keyboardVerticalOffset={Platform.OS === 'android' ? -200 : 50}
      style={[styles.container, style]}
      {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
