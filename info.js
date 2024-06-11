import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { wp, hp } from '../../helpers/common'; // Assuming these helpers are available
import { theme } from '../../constants/theme'; // Assuming theme is defined similarly
import { useRouter } from 'expo-router';



const slides = [
  {
    id: 1,
    title: 'Facilitate Communication',
    description: 'Enabling seamless communication through real-time translation and interpretation services',
    image: require('../../assets/images/info2.png'),
  },
  {
    id: 2,
    title: 'Promote Inclusivity ',
    description: 'Fostering empathy and understanding by educating users on deaf culture and communication methods',
    image: require('../../assets/images/info1.png'),
  },
  {
    id: 3,
    title: 'Empower Deaf Individuals',
    description: 'Empowering deaf individuals to share their stories and connect with others, amplifying their voices in society',
    image: require('../../assets/images/info3.png'),
  },
];

const buttonLabel = (label) => {
  return(
    <View style={{
      padding:12
    }}>
      <Text style={{
        color: theme.colors.blue,
        fontWeight: '600',
        fontSize : theme.radius.xl,
      }}>
        {label}
      </Text>
    </View>

    
  )
}
const InfoScreen = () => {
  const router = useRouter(); 

  
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        onDone={() => router.push('/home/signin')}  // Navigate to signin screen on done
        showSkipButton={true}
        onSkip={() => router.push('/home/signin')}
        
        activeDotStyle={{ backgroundColor: theme.colors.blue , 
                          width : 30}} // Change color of the active dot
        buttonTextStyle={{ color: theme.colors.blue}} // Change color of button text
        buttonStyle={{ backgroundColor: theme.colors.blue }} // Change background color of button
    
        renderDoneButton={() => buttonLabel("Done")}
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
      />
    );
  };

 


const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    paddingTop: 100,
  },
  image: {
    width: wp(100),
    height: hp(50), // Adjusted height to fit within the screen
  },
  title: {
    fontSize: hp(4),
    fontWeight: 'bold',
    color: theme.colors.neutral(0.9),
    marginTop: 20,
  },
  description: {
    fontSize: hp(2.5),
    textAlign: 'center',
    marginTop: 10,
    color: theme.colors.neutral(0.7),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: hp(3),
    fontWeight: 'semi bold',
  },
});

export default InfoScreen;
