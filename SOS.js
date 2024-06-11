/*import React, { useState, useLayoutEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, TextInput, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';



const emergencyCases = [
  { id: '1', description: 'Panic Attack', image: require('../../../../assets/images/Screenshot 2024-06-06 024052.png') },
  { id: '2', description: 'Fire', image: require('../../../../assets/images/Screenshot 2024-06-06 024006.png') },
  { id: '3', description: 'Accident', image: require('../../../../assets/images/Screenshot 2024-06-06 024032.png') },
  { id: '4', description: 'Burglary', image: require('../../../../assets/images/R.png') },
  { id: '5', description: 'Police', image: require('../../../../assets/images/Screenshot 2024-06-06 024040.png') },
  { id: '6', description: 'Heart Attack', image: require('../../../../assets/images/Screenshot 2024-06-06 024109.png') },
  { id: '7', description: 'Paramedics', image: require('../../../../assets/images/Screenshot 2024-06-06 024117.png') },
  { id: '8', description: 'Drowning', image: require('../../../../assets/images/Screenshot 2024-06-06 024122.png') },
];

const EmergencyDescription = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const navigation = useNavigation();

   const router = useRouter();

  const handleSelectCase = (emergencyCase) => {
    setSelectedCase(emergencyCase);
  };

  const handleCall = () => {
    navigation.navigate('CallingEmergency');
  };

  const navigat = useNavigation();

  useLayoutEffect(() => {
    navigat.setOptions({
      headerShown: false,
    });
  }, [navigat]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Describe your emergency case</Text>
        <Icon name="exclamation-triangle" size={24} color="#ffffff" />
      </View>
      <FlatList
        data={emergencyCases}
        horizontal
         renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectCase(item)} style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
          </TouchableOpacity>
          )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.imageList}
      />
      <View style={styles.footer}>
        <TextInput
          style={styles.inputBox}
          placeholder="Selected emergency description"
          value={selectedCase ? selectedCase.description : ''}
          editable={false}
        />
        <TouchableOpacity style={styles.callButton} onPress={() => router.push('/home/screenVolunteer/volunteerHome/call')}>
          <Icon name="phone" size={24} color="#ffffff" />
          <Text style={styles.callButtonText}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ece5dd',
    marginTop:50
  },
  header: {
    padding: 30,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50
  },
  headerText: {
    color: '#ffffff',
    fontSize: 18,
    marginRight: 10,
  },
  imageList: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  imageContainer: {
    marginHorizontal: 10,
  },
  image: {
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').width * 0.6,
    borderRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom:120
  },
  inputBox: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#ece5dd',
    marginHorizontal: 10,
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#d9534f',
    borderRadius: 20,
  },
  callButtonText: {
    color: '#ffffff',
    marginLeft: 5,
  },
});

export default EmergencyDescription;*/

import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const SoundIntensityPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../../../assets/images/Screenshot 2024-06-06 034200.png') } style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Sound Intensity Measurement</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SoundIntensityPage;
