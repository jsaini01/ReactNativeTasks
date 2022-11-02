import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomePage = ({navigation}) => {
  return (
    <View style={styles.body}>
      {/* <Button title="goto" onPress={() => navigation.navigate('contact')} /> */}
      <Text>HomePage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ff4081',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage;
