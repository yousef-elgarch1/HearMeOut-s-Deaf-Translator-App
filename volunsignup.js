/*import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router'; // For navigation
import { theme } from '../../../constants/theme';
import { createUser } from '../../../lib/appwrite';

const VolunteerSignUpScreen = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cardId, setCardId] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    
    if (username && email && phone && cardId && password) {
      createUser(email, password, username)
        .then(() => {
          router.push('/home/screenVolunteer/volunteerHome');
        })}
        .catch(error => {
          console.log(error);
          alert('Error creating user. Please try again.');
        });
    } else {
      alert('Please fill in all fields.');
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Volunteer's Information</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        placeholderTextColor={theme.colors.placeholder}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor={theme.colors.placeholder}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Phone"
        style={styles.input}
        placeholderTextColor={theme.colors.placeholder}
        keyboardType='numeric'
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        placeholder="Card ID"
        style={styles.input}
        placeholderTextColor={theme.colors.placeholder}
        value={cardId}
        onChangeText={setCardId}
      />
      <TextInput
        placeholder="Create Password"
        style={styles.input}
        placeholderTextColor={theme.colors.placeholder}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} 
      onPress={ {submit} => router.push('/home/screenVolunteer/volunteerHome/VHome')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 10,
    marginBottom: 20,
    color: theme.colors.text,
  },
  button: {
    backgroundColor: theme.colors.black,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 18,
  },
});

export default VolunteerSignUpScreen;*/


/*import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router'; // For navigation
import { theme } from '../../../constants/theme';
import { createUser } from '../../../lib/appwrite';

const VolunteerSignUpScreen = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cardId, setCardId] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    if (username && email && phone && cardId && password) {
      createUser(email, password, username)
        .then(() => {
          router.push('/home/screenVolunteer/volunteerHome/Vnews');
        })
        .catch(error => {
          console.log(error);
          alert('Error creating user. Please try again.');
        });
    } else {
      alert('Please fill in all fields.');
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Volunteer's Information</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        placeholderTextColor={theme.colors.placeholder}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor={theme.colors.placeholder}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Phone"
        style={styles.input}
        placeholderTextColor={theme.colors.placeholder}
        keyboardType='numeric'
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        placeholder="Card ID"
        style={styles.input}
        placeholderTextColor={theme.colors.placeholder}
        value={cardId}
        onChangeText={setCardId}
      />
      <TextInput
        placeholder="Create Password"
        style={styles.input}
        placeholderTextColor={theme.colors.placeholder}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 10,
    marginBottom: 20,
    color: theme.colors.text,
  },
  button: {
    backgroundColor: theme.colors.black,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 18,
  },
});

export default VolunteerSignUpScreen;
*/








import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView,Image } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router'; // For navigation
import { theme } from '../../../constants/theme';
/*import { createUser } from '../../../lib/appwrite';*/

const VolunteerSignUpScreen = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cardId, setCardId] = useState('');
  const [password, setPassword] = useState('');
/*
  const submit = () => {
    
    if (username && email && phone && cardId && password) {
      createUser(email, password, username)
        .then(() => {
          router.push('/home/screenVolunteer/volunteerHome');
        })}
        .catch(error => {
          console.log(error);
          alert('Error creating user. Please try again.');
        });
    } else {
      alert('Please fill in all fields.');
    }
  }*/

  return (
    <ScrollView contentContainerStyle={styles.container}>
   <Image source={require('../../../assets/images/volunteer.png')} style={styles.iconImage} />
      <Text style={styles.title}>Volunteer's Information</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        placeholderTextColor={theme.colors.placeholder}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor={theme.colors.placeholder}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Phone"
        style={styles.input}
        placeholderTextColor={theme.colors.placeholder}
        keyboardType='numeric'
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        placeholder="Card ID"
        style={styles.input}
        placeholderTextColor={theme.colors.placeholder}
        value={cardId}
        onChangeText={setCardId}
      />
      <TextInput
        placeholder="Create Password"
        style={styles.input}
        placeholderTextColor={theme.colors.placeholder}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} 
      onPress={/*submit*/ () => router.push('/home/screenVolunteer/volunteerHome/VHome')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
    iconImage: {
    width: 170,
    height: 170,
    borderRadius:20
    },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 10,
    marginBottom: 20,
    color: theme.colors.text,
  },
  button: {
    backgroundColor: theme.colors.black,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 18,
  },
});

export default VolunteerSignUpScreen;
