import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const backgroundStyle = {backgroundColor: Colors.lighter};

  return (
    <View style={{...backgroundStyle, ...styles.body}}>
      <SafeAreaView style={styles.innerBody}>
        <Image
          style={styles.illustration}
          source={require('./assets/illustration-pana.png')}
        />
        <Text style={styles.bodyText}>Let's start from here: </Text>
        <Text style={styles.largeText}>Hello World!</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerBody: {
    alignItems: 'center',
  },
  illustration: {
    width: 350,
    height: 350,
  },
  bodyText: {
    fontSize: 18,
  },
  largeText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});

export default App;
