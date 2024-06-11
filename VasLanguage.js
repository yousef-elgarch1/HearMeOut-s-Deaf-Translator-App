

import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { Fontisto, Ionicons } from '@expo/vector-icons';
import { theme } from '../../../../constants/theme';
import { CameraView } from 'expo-camera';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

export default function VasLanguage(props) {
  const [enteredtxt, setenteredtxt] = useState("");
  const [showCamera, setShowCamera] = useState(false); // State to control camera visibility
  const [facing, setFacing] = useState('back'); // Camera facing state
  const [showMicrophoneImage, setShowMicrophoneImage] = useState(false);
  const navigation = useNavigation();

  // Function to toggle camera visibility
  const toggleCamera = () => {
    setShowCamera(prevState => !prevState);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  // Function to toggle camera facing (front/back)
  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  // Function to handle microphone toggle
  const toggleMicrophone = () => {
    setShowMicrophoneImage(prevState => !prevState);
    console.log('Microphone toggled');
  };

  // Function to close camera
  const closeCamera = () => {
    setShowCamera(false);
  };

  return (
    <View style={styles.container}>
      {/* Background Video */}
      <Video
        source={require('../../../../assets/images/nature.mp4')}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        shouldPlay
        isLooping
        onError={(error) => console.log('Video Error:', error)}
      />

      {/* Content */}
      <View style={styles.overlay}>
        <View style={styles.languageContainer}>
          {/* Language Options */}
          <View style={styles.languageOption}>
            <Text style={styles.languageOptionTxt}>English</Text>
          </View>
          <View style={styles.arrowContainer}>
            <Text style={styles.arrow}>➔</Text>
          </View>
          <View style={styles.languageOption}>
            <Text style={styles.languageOptionTxt}> ASL</Text>
          </View>
        </View>

        {/* Text Input */}
        <View style={styles.inputCont}>
          <TextInput
            multiline
            placeholder='Enter a text please ...'
            style={styles.textinput}
            onChangeText={(text) => setenteredtxt(text)}
          />
          <TouchableOpacity
            disabled={enteredtxt === ""}
            style={styles.iconContainer}
          >
            <Ionicons name="arrow-forward-circle-sharp" size={24} color={enteredtxt !== "" ? theme.colors.darkGreen : theme.colors.green} />
          </TouchableOpacity>
        </View>

        {/* Camera */}
        {showCamera && (
          <TouchableOpacity style={styles.closeButton} onPress={closeCamera}>
            <Text style={styles.closeButtonText}>Close Camera</Text>
          </TouchableOpacity>
        )}
        {showCamera ? (
          <View style={styles.cameraContainer}>
            <CameraView style={styles.camera} facing={facing}>
              <TouchableOpacity style={styles.flipButton} onPress={toggleCameraFacing}>
                <Image source={require('../../../../assets/images/flip.jpg')} style={styles.icon} />
              </TouchableOpacity>
            </CameraView>
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.toggleButton} onPress={toggleCamera}>
              <Text style={styles.toggleButtonText}>Toggle Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toggleButton} onPress={toggleMicrophone}>
              <Image />
              <Text style={styles.toggleButtonText}>Toggle Microphone</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Microphone Image */}
        {showMicrophoneImage && (
          <View style={styles.microphoneImageContainer}>
            <Image source={require('../../../../assets/images/siriStat.png')} style={styles.microphoneImage} />
          </View>
        )}
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  languageContainer: {
    flexDirection: 'row',
    borderBottomColor: theme.colors.lightGray,
    borderBottomWidth: 1,
    marginTop:30
  },
  languageOption: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    marginTop:15
  },
  arrowContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    color: theme.colors.lightGray,
    fontSize: 24,
  },
  languageOptionTxt: {
    color: theme.colors.white,
    letterSpacing: 0.3,
  },
  inputCont: {
    flexDirection: 'row',
    borderBottomColor: theme.colors.white,
    borderBottomWidth: 1,
    marginBottom:40
  },
  textinput: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    letterSpacing: 0.3,
    height: 90,
    color: "#202124",
  },
  iconContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraContainer: {
    flex: 1,
    marginVertical: 10,
    marginBottom: 60,
    padding: 10,
    borderRadius: 20,
  },
  camera: {
    flex: 1,
    padding: 3,
  },
  flipButton: {
    alignSelf: 'flex-end',
    margin: 10,
    
  },
     icon: {
    width: 50,  // Set your desired width
    height: 50, // Set your desired height
    resizeMode: 'contain',
      }, // Adjust resize mode as necessary
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  toggleButton: {
    backgroundColor: theme.colors.blue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  toggleButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  microphoneImageContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  microphoneImage: {
    width: 120,
    height: 120,
  },
});
