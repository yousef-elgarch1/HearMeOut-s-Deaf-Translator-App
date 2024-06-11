import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router'; // For navigation
import { theme } from '../../constants/theme';
import { wp, hp } from '../../helpers/common';

const ChoosePageScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/img1.jpg')}
        style={styles.size}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Who are you?</Text>
          </View>
          <View style={styles.iconsContainer}>

            <TouchableOpacity style={styles.iconWrapper} onPress={() => router.push('/home/screenVolunteer/volunsignup')}>
              <View style={styles.icon}>
                <Image source={require('../../assets/images/volunteer.png')} style={styles.iconImage} />
              </View>
              <Text style={styles.iconText}>I am a Volunteer</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconWrapper} onPress={() => router.push('/home/screenDeaf/deafsignup')}>
              <View style={styles.icon}>
                <Image source={require('../../assets/images/deaf.png')} style={styles.iconImage} />
              </View>
              <Text style={styles.iconText}> I am a Deaf Person</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
  },
  size: {
    width: wp(100),
    height: hp(110),
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.white,
    marginBottom: 100,
  },
  iconsContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: hp(40),
    width: wp(50),
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 10 
  },
  icon: {
    width: 60,
    height: 60,
    backgroundColor: theme.colors.iconBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
    marginTop:10
  },
  iconImage: {
    width: 90,
    height: 90,
    borderRadius:200/2
  },
  iconText: {
    fontSize: 16,
    color: theme.colors.white,
    textAlign: 'center',
  },
});

export default ChoosePageScreen;
