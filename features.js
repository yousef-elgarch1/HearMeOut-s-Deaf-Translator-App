import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import {theme} from '../../../../../constants/theme'
export default function Features() {
  return (
    <View style={[styles.container, { height: hp(60) }]}>
      <Text style={[styles.headerText, { fontSize: wp(6.5) }]}>Features</Text>
      <View style={[styles.featureCard, styles.customFeatureCard]}>
        <View style={[styles.featureHeader, styles.customFeatureHeader]}>
          <Image source={require('../../../../../assets/images/gpttt.jpg')} style={styles.icon} />
          <Text style={[styles.featureTitle, { fontSize: wp(4.8) }]}>HearMeGPT</Text>
        </View>
        <Text style={[styles.featureDescription, styles.customFeatureDescription, { fontSize: wp(3.8) }]}>
          ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas.
        </Text>
      </View>
      <View style={[styles.featureCard2, styles.customFeatureCard]}>
        <View style={[styles.featureHeader, styles.customFeatureHeader]}>
          <Image source={require('../../../../../assets/images/gpt.png')} style={styles.icon} />
          <Text style={[styles.featureTitle, { fontSize: wp(4.8) }]}>DALL-E</Text>
        </View>
        <Text style={[styles.featureDescription, styles.customFeatureDescription, { fontSize: wp(3.8) }]}>
          DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity.
        </Text>
      </View>
      <View style={[styles.featureCard1, styles.customFeatureCard]}>
        <View style={[styles.featureHeader, styles.customFeatureHeader]}>
          <Image source={require('../../../../../assets/images/logoo.png')} style={styles.icon} />



          <Text style={[styles.featureTitle, { fontSize: wp(4.8) }]}>HearMeGPT</Text>
        </View>
        <Text style={[styles.featureDescription, styles.customFeatureDescription, { fontSize: wp(3.8) }]}>
          ChatGPT can provide you with instant and knowledgeable responses, assist you concerning ASL language.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 1,
    paddingHorizontal: 15,
  marginTop:180
  },
  headerText: {
    fontWeight: '600',
    color: '#4B5563',
    marginTop:-90
  },
  featureCard: {
    backgroundColor: theme.colors.lightGreen,
    padding: 10,
    borderRadius: 16,
    marginVertical: 5,
    marginTop:60
    
  },
   featureCard2: {
    backgroundColor: theme.colors.orchid,
    padding: 10,
    borderRadius: 16,
    marginVertical: 5,
    
  },
   featureCard1: {
    backgroundColor: theme.colors.cyan,
    padding: 10,
    borderRadius: 16,
    marginVertical: 5,
    
  },
  customFeatureCard: {
    // Adjust these values to modify the position of the featureCard
    marginHorizontal: 7,
    marginVertical: 10,
    padding: 5,
  },
  featureHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  customFeatureHeader: {
    // Adjust these values to modify the position of the featureHeader
    marginBottom: 5,
  },
  icon: {
    height: hp(4),
    width: hp(4),
    marginRight: 8,
  },
  featureTitle: {
    fontWeight: '600',
    color: '#4B5563',
    
  },
  featureDescription: {
    color: '#4B5563',
    fontWeight: '500',
  },
  customFeatureDescription: {
    // Adjust these values to modify the position of the featureDescription
    marginTop: 10,
    marginLeft: 7,
  },
});
