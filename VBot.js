import React, { useState, useLayoutEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, FlatList, Text, ImageBackground, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../../../constants/theme';

const Vchat = () => {

    const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);


  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello!', user: 'user1', type: 'received', messageType: 'text' },
    { id: '2', text: 'Hi! How are you?', user: 'user2', type: 'sent', messageType: 'text' },
    { id: '3', text: 'I am good, thank you!', user: 'user1', type: 'received', messageType: 'text' },
    { id: '4', text: 'What about you?', user: 'user1', type: 'received', messageType: 'text' },
    { id: '6', image: 'https://via.placeholder.com/150', user: 'user1', type: 'received', messageType: 'image' },
    { id: '7', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', user: 'user2', type: 'sent', messageType: 'audio' },
  ]);

  const renderMessageContent = (item) => {
    switch (item.messageType) {
      case 'text':
        return <Text style={styles.messageText}>{item.text}</Text>;
      case 'image':
        return <Image source={{ uri: item.image }} style={styles.messageImage} />;
      case 'audio':
        return (
          <TouchableOpacity style={styles.audioMessage}>
            <Icon name="play-circle" size={24} color="#075e54" />
            <Text style={styles.audioText}>Audio Message</Text>
          </TouchableOpacity>
        );
      default:
        return null;
    }
  };

  const renderItem = ({ item }) => (
    <View style={[styles.messageContainer, item.type === 'sent' ? styles.sent : styles.received]}>
      {item.type === 'received' && (
        <Image
          source={require('../../../../assets/images/youssef.jpg')} // Update with the actual path of your user image
            style={styles.userIcon}
        />
      )}
      <View style={styles.messageBubble}>
        {renderMessageContent(item)}
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg' }} // Replace with actual background image URL
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Chat</Text>
        </View>
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.chatBody}
        />
        <View style={styles.footer}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="paperclip" size={24} color="#075e54" />
          </TouchableOpacity>
          <TextInput
            style={styles.inputBox}
            placeholder="Type a message"
          />
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="microphone" size={24} color="#075e54" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    padding: 15,
    backgroundColor: '#075e54',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 18,
  },
  chatBody: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: 'transparent',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom:95
  },
  inputBox: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#ece5dd',
    marginHorizontal: 10,
  },
  iconButton: {
    padding: 5,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  sent: {
    justifyContent: 'flex-end',
  },
  received: {
    justifyContent: 'flex-start',
  },
  messageBubble: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#dcf8c6',
    marginHorizontal: 10,
  },
  messageText: {
    fontSize: 16,
  },
  messageImage: {
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').width * 0.6,
    borderRadius: 10,
  },
  audioMessage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  audioText: {
    marginLeft: 10,
    fontSize: 16,
  },
  userIcon: {
    width: 35,
    height:35,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: theme.colors.white,
    marginLeft: 10,
  },
});

export default Vchat;
