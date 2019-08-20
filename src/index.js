import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

import Routes from './routes';

export default function App() {
  return (
    // <View style={style.container}>
    // <Text style={style.text}>Hello World</Text>
    // </View>
    < Routes />
  );
};

// const style = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor: '#7159c1',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   text: {
//     fontWeight: 'bold',
//     color: '#FFF',
//     fontSize: 20
//   }
// });



