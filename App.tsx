import {observer} from 'mobx-react-lite';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Navigator} from './src/navigate/Navigator';
import {Colors} from './src/styles/Colors';

export const App: React.FC = observer(() => {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.transparent}
        translucent
      />
      <Navigator />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
