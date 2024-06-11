/*import { View, Text, StyleSheet, Image, Pressable , Button, ScrollView} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { wp, hp } from '../helpers/common'
import {LinearGradient} from 'expo-linear-gradient'
import Animated, {FadeInDown  } from 'react-native-reanimated'
import {theme} from '../constants/theme'
import { useRouter } from 'expo-router'






const welcomeScreen = () => {
const router = useRouter();


  return (
    <View style= {styles.container}>
      <StatusBar style="light" />
      <Image
        source = {require('../assets/images/img1.jpg')}
        style = {styles.bgImage}
        resizeMode = 'cover' 

        />
   
        <Animated.View entering={FadeInDown.duration(600)} style={{flex:1}} >
        <ScrollView contentContainerStyle={{height:'100%'}}>
             <LinearGradient 
                 colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.5)', 'white', 'white']}
                 style={styles.gradient}
                 start={{x:0.1, y:0}}
                 end={{x:0.3, y:0.9}}

              />
      
              <View style ={styles.contentContainer }>
                  <Animated.Image
                    entering={FadeInDown.delay(400).springify()}
                    source={require('../assets/images/logo perfectoo.png')}  // Update this with your image path
                    style={styles.title}
                    resizeMode= 'center'
                  />
                  <Animated.Text
                    entering={FadeInDown.delay(500).springify()}
                    style={styles.punchline}>
                      Helping is Hearing
                      
                  </Animated.Text>
                  <Animated.View
                    entering={FadeInDown.delay(600).springify()}>
                    <Pressable onPress={()=> router.push('home/info')} style={styles.startButton}>
                      <Text style={styles.startText}>
                        Let's begin !

                      </Text>
                    </Pressable>
                      
                  
                  </Animated.View>
              </View>
            </ScrollView>
       </Animated.View>
       
    </View>

  )
}
const styles = StyleSheet.create({
    container: {
      flex:1
     },
    bgImage:{
        width: wp(100),
        height: hp(70), 
        position: 'absolute'
     },
    gradient:{
        width: wp(110),
        height: hp(100), 
        bottom:0,
        position: 'absolute'
     },
     
    contentContainer:{
      flex:1,
      alignItems:'center',
      justifyContent:'flex-end',
      gap: 0,
     },
    title: {
      fontSize: hp(0),
      color: theme.colors.neutral(0.9),
      fontWeight: theme.fontWeights.bold,
      
     },
    punchline:{
      fontSize: hp(3),
      letterSpacing: 0,
      marginBottom: 20,
      fontWeight: theme.fontWeights.medium
     },
    startText:{
      color: theme.colors.white,
      fontSize: hp(3),
      fontWeight: theme.fontWeights.medium,
      letterSpacing:1,
     },
    startButton: {
      marginBottom:50,
      backgroundColor: theme.colors.blue,
      padding: 15,
      paddingHorizontal: 90,
      borderRadius: theme.radius.xl,
      borderCurve: 'continuous'
    },
})


export default welcomeScreen */


import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { wp, hp } from '../helpers/common';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { theme } from '../constants/theme';
import { useRouter } from 'expo-router';
import * as NavigationBar from 'expo-navigation-bar'; // Import the navigation bar package

const WelcomeScreen = () => {
  const router = useRouter();

  useEffect(() => {
    // Hide the navigation bar when the component mounts
    NavigationBar.setVisibilityAsync('hidden');
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require('../assets/images/img1.jpg')}
        style={styles.bgImage}
        resizeMode='cover'
      />
      {/*linear gradient*/}
      <Animated.View entering={FadeInDown.duration(600)} style={{ flex: 1 }} >
        <ScrollView contentContainerStyle={{ height: '100%' }}>
          <LinearGradient
            colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.5)', 'white', 'white']}
            style={styles.gradient}
            start={{ x: 0.1, y: 0 }}
            end={{ x: 0.3, y: 0.9 }}
          />
          {/*content*/}
          <View style={styles.contentContainer}>
            <Animated.Image
              entering={FadeInDown.delay(400).springify()}
              source={require('../assets/images/logo perfectoo.png')}  // Update this with your image path
              style={styles.title}
              resizeMode='center'
            />
            <Animated.Text
              entering={FadeInDown.delay(500).springify()}
              style={styles.punchline}>
              Helping is Hearing
            </Animated.Text>
            <Animated.View
              entering={FadeInDown.delay(600).springify()}>
              <Pressable onPress={() => router.push('home/info')} style={styles.startButton}>
                <Text style={styles.startText}>
                  Let's begin!
                </Text>
              </Pressable>
            </Animated.View>
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    width: wp(100),
    height: hp(70),
    position: 'absolute'
  },
  gradient: {
    width: wp(110),
    height: hp(100),
    bottom: 0,
    position: 'absolute'
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 0,
  },
  title: {
    fontSize: hp(0),
    color: theme.colors.neutral(0.9),
    fontWeight: theme.fontWeights.bold,
  },
  punchline: {
    fontSize: hp(3),
    letterSpacing: 0,
    marginBottom: 20,
    fontWeight: theme.fontWeights.medium
  },
  startText: {
    color: theme.colors.white,
    fontSize: hp(3),
    fontWeight: theme.fontWeights.medium,
    letterSpacing: 1,
  },
  startButton: {
    marginBottom: 50,
    backgroundColor: theme.colors.blue,
    padding: 15,
    paddingHorizontal: 90,
    borderRadius: theme.radius.xl,
    borderCurve: 'continuous'
  },
});

export default WelcomeScreen;
