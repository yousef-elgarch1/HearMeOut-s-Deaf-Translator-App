import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router'; // For navigation
import { theme } from '../../../constants/theme';
import { Video } from 'expo-av';
import { wp, hp } from '../../../helpers/common';


const DeafSignUpScreen = () => {
  const router = useRouter();

  return (
    <View View style={styles.container}>
       <ImageBackground
        source={require('../../../assets/images/b3509947-aa34-43e5-a2a3-94ad86b1dd6c.jpeg')}
        style={ styles.size}
        resizeMode="cover"
        >
   
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Deaf's Information</Text>
      <TextInput placeholder="Username" style={styles.input} placeholderTextColor={theme.colors.white} />
           <TextInput placeholder="Email" style={styles.input} placeholderTextColor={theme.colors.white} />
      <TextInput placeholder="Phone" style={styles.input} placeholderTextColor={theme.colors.white}  />
      <TextInput placeholder="Create Password" style={styles.input} placeholderTextColor={theme.colors.white} secureTextEntry />
      <TextInput placeholder="Preferred communication method" style={styles.input} placeholderTextColor={theme.colors.white} />
      <TextInput placeholder="Sign language level" style={styles.input} placeholderTextColor={theme.colors.white} />
      <TextInput placeholder="Emergency contact" style={styles.input} placeholderTextColor={theme.colors.white} />
 
       <TouchableOpacity style={styles.button} 
      onPress={/*submit*/ () => router.push('/home/screenDeaf/deafHome')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
    </ImageBackground>
  </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: theme.colors.backgroundColor,

  },

 
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:theme.colors.white
  },
    size: {
    width: wp(100),
    height:hp(120)

  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: theme.colors.white,
    borderRadius: 10,
    marginBottom: 20,
    color: theme.colors.white,
  },
  button: {
    backgroundColor: theme.colors.black,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 18,
  },
    overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default DeafSignUpScreen;
