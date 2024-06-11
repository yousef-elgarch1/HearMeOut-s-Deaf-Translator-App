import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const CallingEmergency = () => {
  return (
    <ImageBackground
      source={require('../../../../assets/images/call.jpg')} // Replace with actual phone ringing image path
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.callingText}>Calling Emergency</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:60,
    marginHorizontal:0,
    marginVertical:90
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
  callingText: {
    color: '#ffffff',
    fontSize: 24,
  },
});

export default CallingEmergency;
