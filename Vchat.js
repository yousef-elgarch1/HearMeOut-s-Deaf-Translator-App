import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Vchat = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chat</Text>
      </View>
      <FlatList
        data={[]}
        renderItem={() => <Text>No messages yet</Text>}
        keyExtractor={(item, index) => index.toString()}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ece5dd',
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
    padding: 20,
    backgroundColor: '#ffffff',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
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
});

export default Vchat;
