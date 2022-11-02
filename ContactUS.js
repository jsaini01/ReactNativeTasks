import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactUS = ({navigation}) => {
  return (
    <View style={styles.body}>
      {/* <Button title="goto" onPress={() => navigation.navigate('home')} /> */}
      <Text>contact</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#673ab7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ContactUS;
