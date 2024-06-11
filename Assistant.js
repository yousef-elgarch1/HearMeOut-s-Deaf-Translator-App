/*import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Features from '../Vbot/features';
import { dummyMessages } from "../../../../../constants";
import { theme } from "../../../../../constants/theme";
import siri from '../../../../../assets/icons/siri.json';
import LottieView from 'lottie-react-native';
import Voice from '@react-native-voice/voice';




export default function AssistScreen() {
  const [messages, setMessages] = useState(dummyMessages);
  const [showLottie, setShowLottie] = useState(false);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(true);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;
    Voice.onSpeechError = onSpeechErrorHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  });

  const onSpeechStartHandler = (e) => {
    console.log('speech start handler');
  };
  
  const onSpeechEndHandler = (e) => {
    setRecording(false);
    console.log('speech end handler');
  };

  const onSpeechResultsHandler = (e) => {
    console.log('voice event:', e);
  };

  const onSpeechErrorHandler = (e) => {
    console.log('speech error handler', e);
  };

  const startRecording = async () => {
    setRecording(true);
    try {
      await Voice.start('en-US');
    } catch (error) {
      console.log('error', error);
    }
  };

  const stopRecording = async () => {
    try {
      Voice.removeAllListeners();
      await Voice.stop();
      setRecording(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  const clear = () => {
    setMessages([]);
  };

  const stopSpeaking = () => {
    setSpeaking(false);
  };

  const toggleLottie = () => {
    setShowLottie(!showLottie);
  };
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ position: 'absolute', top: hp(5), left: wp(35) }}>
            <Image
              source={require('../../../../../assets/images/pngtree-chatbot-color-icon-chat-bot-png-image_5258006.png')}
              style={{ height: hp(23), width: hp(17) }}
            />
          </View>
        </View>
        {messages.length > 0 ? (
          <View>
            <Text style={[styles.featureTitle, { fontSize: wp(5) }]}>
              My YouNis
            </Text>
            <View style={[styles.messageContainer, { fontSize: wp(5) }]}>
              <ScrollView
                bounces={false}
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}
              >
                {messages.map((message, index) => {
                  if (message.role == 'assistant') {
                    if (message.content.includes('https')) {
                      // Image response
                      return (
                        <View key={index} style={styles.assistantImageContainer}>
                          <View style={styles.assistantImageWrapper}>
                            <Image
                              source={{ uri: message.content }}
                              style={styles.fullImage}
                              resizeMode="cover"
                            />
                          </View>
                        </View>
                      );
                    } else {
                      // Text response
                      return (
                        <View key={index} style={styles.assistantTextWrapper}>
                          <Text>
                            {message.content}
                          </Text>
                        </View>
                      );
                    }
                  } else {
                    // User input
                    return (
                      <View key={index} style={styles.userMessageContainer}>
                        <View style={styles.userMessageWrapper}>
                          <Text>
                            {message.content}
                          </Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}
        {/*recording button
    <View style={styles.lottieContainer}>
    {
      recording? (
        <TouchableOpacity onPress={stopRecording}>
         <LottieView
         
            source={siri}
            autoPlay
            loop
            style={{height:hp(10), width:hp(10)}}
            

          />
          </TouchableOpacity>

      ):(
        <TouchableOpacity onPress={startRecording}>
        <Image 
        source={require('../../../../../assets/images/siriStat.png')}
        style={{width: hp(10), height: hp(10)}}
        />
        </TouchableOpacity>

      )
    }
    {
  messages.length > 0 && (
    <TouchableOpacity
      onPress={clear}
      style={{ backgroundColor: '#6B7280', borderRadius: 20, padding: 10, position: 'absolute', right: 10 }}
    >
      <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Clear</Text>
    </TouchableOpacity>
  )
}
  {
    speaking && (
    <TouchableOpacity
      onPress={stopSpeaking}
      style={{ backgroundColor: 'red', borderRadius: 20, padding: 10,marginBottom:30, position: 'absolute', left: 10 }}
    >
      <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Stop</Text>
    </TouchableOpacity>
  )
}
     

         
        </View>
     
  </SafeAreaView>
</View>
  );
}















const styles = StyleSheet.create({
  featureTitle: {
    fontWeight: '600',
    color: '#4B5563',
    textAlign: 'center',
    marginVertical: 10,
  },
  messageContainer: {
    backgroundColor: theme.colors.lightGray,
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 1,
    marginBottom: -50
  },
  scrollViewContent: {
    paddingBottom: 10,
  },
  assistantImageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    borderRadius:20,
    marginTop:10
  },
  assistantImageWrapper: {
    backgroundColor: '#D1FAE5',
    padding: 10,
    borderRadius: 20,
    borderTopLeftRadius: 0,
    width: wp(33),
    height: hp(18), // Adjust height as needed
    overflow: 'hidden',
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
  assistantTextWrapper: {
    backgroundColor: '#D1FAE5',
    padding: 10,
    borderRadius: 20,
    borderTopLeftRadius: 0,
    marginBottom: 10,
  },
  userMessageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  userMessageWrapper: {
    backgroundColor: '#BFDBFE',
    padding: 10,
    borderRadius: 20,
    borderTopRightRadius: 0,
    width: wp(70),
  },

   lottieContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Align Lottie animation to the bottom
    alignItems: 'center',
    paddingHorizontal:15,
    paddingVertical:10,
    height:hp(5),
    width:hp(50),
    
  },
  lottieAnimation: {
    width: 80, // Adjust width and height as needed
    height: 90,
  },
});
*/





































































import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Features from '../Vbot/features';
import { dummyMessages } from "../../../../../constants";
import { theme } from "../../../../../constants/theme";
import siri from '../../../../../assets/icons/siri.json';
import LottieView from 'lottie-react-native';
import * as Speech from 'expo-speech';

import FastImage from 'react-native-fast-image';

export default function AssistScreen() {
  const [messages, setMessages] = useState(dummyMessages);
  const [showLottie, setShowLottie] = useState(true);
  const [speaking, setSpeaking] = useState(false);

  const startSpeaking = () => {
    setSpeaking(true);
    Speech.speak("Hello, how can I assist you today a si youssef?", {
      onDone: () => setSpeaking(false),
      onError: () => setSpeaking(false)
    });
  };

  const stopSpeaking = () => {
    setSpeaking(false);
    Speech.stop();
  };

  const clear = () => {
    setMessages([]);
  };

  const toggleLottie = () => {
    setShowLottie(!showLottie);
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ position: 'absolute', top: hp(5), left: wp(35) }}>
            <Image
              source={require('../../../../../assets/images/pngtree-chatbot-color-icon-chat-bot-png-image_5258006.png')}
              style={{ height: hp(23), width: hp(17) }}
            />
          </View>
        </View>
        {messages.length > 0 ? (
          <View>
            <Text style={[styles.featureTitle, { fontSize: wp(5) }]}>
              My YouNis
            </Text>
            <View style={[styles.messageContainer, { fontSize: wp(5) }]}>
              <ScrollView
                bounces={false}
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}
              >
                {messages.map((message, index) => {
                  if (message.role == 'assistant') {
                    if (message.content.includes('https')) {
                      return (
                        <View key={index} style={styles.assistantImageContainer}>
                          <View style={styles.assistantImageWrapper}>
                            <Image
                              source={{ uri: message.content }}
                              style={styles.fullImage}
                              resizeMode="cover"
                            />
                          </View>
                        </View>
                      );
                    } else {
                      return (
                        <View key={index} style={styles.assistantTextWrapper}>
                          <Text>
                            {message.content}
                          </Text>
                        </View>
                      );
                    }
                  } else {
                    return (
                      <View key={index} style={styles.userMessageContainer}>
                        <View style={styles.userMessageWrapper}>
                          <Text>
                            {message.content}
                          </Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}

        <View style={styles.lottieContainer}>
          {speaking ? (
            <TouchableOpacity onPress={stopSpeaking}>
               <Image
              source={require('../../../../../assets/images/siriiii.gif')} // Replace with your GIF path
              style={{ height: 100, width: 100 }}
              resizeMode='contain'
            />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={startSpeaking}>
              <Image
                source={require('../../../../../assets/images/siriStat.png')}
                style={{ width: hp(13.5), height: hp(13.5) }}
              />
            </TouchableOpacity>
          )}
          
          {messages.length > 0 && (
            <TouchableOpacity
              onPress={clear}
              style={{ backgroundColor: '#6B7280', borderRadius: 20, padding: 10, position: 'absolute', right: 10 }}
            >
              <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Clear</Text>
            </TouchableOpacity>
          )}
          
          {speaking && (
            <TouchableOpacity
              onPress={stopSpeaking}
              style={{ backgroundColor: 'red', borderRadius: 20, padding: 10, marginBottom: 30, position: 'absolute', left: 10 }}
            >
              <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Stop</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  featureTitle: {
    fontWeight: '600',
    color: '#4B5563',
    textAlign: 'center',
    marginVertical: 10,
  },
  messageContainer: {
    backgroundColor: theme.colors.lightGray,
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 1,
    marginBottom: -50
  },
  scrollViewContent: {
    paddingBottom: 10,
  },
  assistantImageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    borderRadius: 20,
    marginTop: 10
  },
  assistantImageWrapper: {
    backgroundColor: '#D1FAE5',
    padding: 10,
    borderRadius: 20,
    borderTopLeftRadius: 0,
    width: wp(33),
    height: hp(18),
    overflow: 'hidden',
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
  assistantTextWrapper: {
    backgroundColor: '#D1FAE5',
    padding: 10,
    borderRadius: 20,
    borderTopLeftRadius: 0,
    marginBottom: 10,
  },
  userMessageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  userMessageWrapper: {
    backgroundColor: '#BFDBFE',
    padding: 10,
    borderRadius: 20,
    borderTopRightRadius: 0,
    width: wp(70),
  },
  lottieContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: hp(5),
    width: hp(50),
  },
  lottieAnimation: {
    width: 80,
    height: 90,
  },
});






