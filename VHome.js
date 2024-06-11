

import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BlurView } from "expo-blur";
import { useRouter } from 'expo-router';

import SOS from "./SOS";
import Vnews from "./Vnews";
import VBot from "./VBot";
import Vasl from './VasLanguage';
import VoiceAssistantScreen from './Vbot/Assistant';

const Tab = createBottomTabNavigator();

const MainButton = () => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.mainButton}
      onPress={() => router.push('/home/screenVolunteer/volunteerHome/Vbot/Assistant')}
    >
      <Image
        source={require('../../../../assets/images/OIP.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const VHomes = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "ASL") {
              iconName = focused ? "ear-outline" : "ear-outline";
            } else if (route.name === "HearBot") {
              iconName = focused
                ? "chatbubble-ellipses"
                : "chatbubble-ellipses-outline";
            } else if (route.name === "SOS") {
              iconName = focused ? "alert-circle" : "alert-circle-outline";
            } else if (route.name === "MainButton") {
              return <MainButton />;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
    
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 28,
            left: 22,
            right: 22,
            elevation: 5,
            backgroundColor: "lightblue",
            borderRadius: 25,
            height: 60,
          },

        })}
      >
        <Tab.Screen name="Home" component={Vnews} />
        <Tab.Screen name="HearBot" component={VBot} />
        <Tab.Screen name="MainButton" component={VoiceAssistantScreen} />
        <Tab.Screen name="SOS" component={SOS} />
        <Tab.Screen name="ASL" component={Vasl} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  blurView: {
    position: 'absolute',
    left: 5,
    right: 5,
    height: 0,
    borderRadius: 25,
    overflow: 'hidden',
  },
  mainButton: {
    backgroundColor: 'white',
    width: 65,
    height: 65,
    position: 'absolute',
    bottom: 35,
    left: '50%',
    marginLeft: -31,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 48,
    height: 48,
  },
});

export default VHomes;
