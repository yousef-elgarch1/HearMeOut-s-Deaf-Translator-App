



import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList,TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../../../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Vnews = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

const cour = [
  { id: '1', description: 'Panic Attack', image: require('../../../../assets/images/COURS1.jpeg') },
  { id: '2', description: 'Fire', image: require('../../../../assets/images/COURS3.jpeg') },
  { id: '3', description: 'Accident', image: require('../../../../assets/images/COURS4.jpeg') },
  { id: '4', description: 'Burglary', image: require('../../../../assets/images/COURS5.jpeg') },
];
  // Dummy course data
  const courses = [
    { id: 1, title: 'Course 1', date: 'June 1, 2024', image: require('../../../../assets/images/COURS1.jpeg') },
    { id: 2, title: 'Course 2', date: 'June 5, 2024', image: require('../../../../assets/images/COURS3.jpeg') },
    { id: 3, title: 'Course 3', date: 'June 10, 2024', image: require('../../../../assets/images/COURS6.jpg') },
  ];

  return (
    <View style={styles.container}>
      <Video
        source={require('../../../../assets/images/nature.mp4')}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        shouldPlay
        isLooping
        onError={(error) => console.log('Video Error:', error)}
      />
      <View style={styles.overlay} />
      <View style={styles.header}>
        <Text style={styles.heading}>Welcome...</Text>
        <View style={styles.iconsContainer}>
          <Ionicons name="notifications-outline" size={24} color={theme.colors.white} style={styles.icon} />
          <Image
            source={require('../../../../assets/images/youssef.jpg')} // Update with the actual path of your user image
            style={styles.userIcon}
          />
        </View>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        placeholderTextColor={theme.colors.lightGray}
      />

      <ScrollView style={styles.courseContainer}>
        {courses.map((course) => (
          <TouchableOpacity
            key={course.id}
            style={styles.courseItem}
            onPress={() => navigation.navigate('CourseDetails', { courseId: course.id })}
          >
            <Image source={course.image} style={styles.courseImage} />
            <Text style={styles.courseTitle}>{course.title}</Text>
            <Text style={styles.courseDate}>{course.date}</Text>
          </TouchableOpacity>
        ))}
         <FlatList
        data={cour}
        horizontal
         renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectCase(item)} style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
          </TouchableOpacity>
          )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.imageList}
      />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
    imageContainer: {
    marginHorizontal: 10,
    marginBottom:150,
    paddingBottom:10
  },
    imageList: {
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom:100
  },
  icon: {
    marginLeft: 10,
  },
  userIcon: {
    width: 35,
    height: 35,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: theme.colors.white,
    marginLeft: 10,
  },
  searchBar: {
    position: 'absolute',
    top: 90,
    left: 20,
    right: 20,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    paddingHorizontal: 20,
    fontSize: 16,
    color: theme.colors.black,
  },
  courseContainer: {
    marginTop: 150, // Adjust as needed
    paddingHorizontal: 20,
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  courseImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  courseDate: {
    fontSize: 14,
    color: theme.colors.lightGray,
  },
});

export default Vnews;
