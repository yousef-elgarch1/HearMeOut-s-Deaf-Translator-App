import { View, Text, ImageBackground, ScrollView, TextInput, StyleSheet, TouchableOpacity , Image, icons} from 'react-native';
import{Picker} from '@react-native-picker/picker';
import React ,{useState}from 'react';
import { wp, hp } from '../../helpers/common'; // Adjust the path based on your project structure
import { theme } from '../../constants/theme';
import { useRouter } from 'expo-router';//hada drori bax nlieniw wentre les pages

const SignInScreen = () => {
     const router = useRouter(); //hta hada
    
     const [userType, setUserType] = useState('');

     
const handleSignIn = () => {
    if (userType === 'volunteer') {
      router.push('/home/screenVolunteer/volunteerHome/vHome');
    } else if (userType === 'deaf') {
      router.push('/home/screenDeaf/deafHome');
    } else {
      alert('Please select your user type');
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/download.jpg')}
        style={ styles.size}
        resizeMode="cover"
        >
        <ScrollView>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>
          </View>
          <View style={styles.datacontainer}>
            <TextInput
              placeholder="Username"
              style={styles.textinput}
              placeholderTextColor={theme.colors.white}
            />
            <TextInput
              placeholder="Password"
              style={styles.textinput}
              placeholderTextColor={theme.colors.white}
              secureTextEntry
           
            />
          </View>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={userType}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => setUserType(itemValue)}
            >
              <Picker.Item label="I am a volunteer" value="volunteer" />
              <Picker.Item label="I am a deaf person" value="deaf" />
            </Picker>
          </View>


          <View style={styles.btncontainer}>
            <TouchableOpacity onPress= {handleSignIn}>
                <View style ={styles.button1}>
                    <Text style={styles.btntext}>SIGN IN</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>{}}>
                <View style ={styles.button2}>
                   <View style= {styles.logo}>
                      <Image source ={require('../../assets/images/mail.png')}
                         resizeMode="contain"
                         style={{
                            width: 30,
                            height:30,
                         }}/>
                   </View>
                   <Text style={styles.btntext}>Connect with E-MAIL</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>router.push('/home/forgotpassrd')}>
                <Text style={styles.text}>Forgot your password? | click here</Text>
            </TouchableOpacity>
          </View>
          <View style ={styles.bottomcontainer}>
            <TouchableOpacity onPress={() => router.push('/home/choosepage')}>
                <Text style={styles.text}>Don't have an account yet? | Sign Up</Text>
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
  topContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  size: {
    width: wp(100),
    height:hp(110)

  },
  title: {
    color: theme.colors.white,
    fontWeight: 'bold',
    fontSize: hp(5.5),
    paddingTop: 8,
    
  },
  subtitle: {
    color: theme.colors.white,
    fontSize: hp(2),
    paddingTop:3,
  },
  datacontainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  textinput: {
    borderWidth: 1,
    borderColor: theme.colors.white,
    padding: 10,
    color: theme.colors.white,
    borderRadius: 15,
    marginBottom: 20,
  },
  btncontainer: {
    marginTop:30,
  },
  button1:{
    backgroundColor: theme.colors.blue,
    padding:15,
    marginHorizontal:50,
    borderRadius:10,
    marginVertical: 0, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  btntext:{
    color: theme.colors.white,
    
    fontSize: hp(2.5),

  },
  button2:{
    flexDirection: 'row',
    backgroundColor: theme.colors.salmon,
    padding: 15, 
    borderRadius: 10,
    marginHorizontal: 50,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    marginRight:10,
  },
  text:{
    color: theme.colors.white,
    textAlign:'center',
    marginTop:10,
    fontWeight:'600',
    fontSize: theme.radius.sm,
  },
  bottomcontainer:{
    justifyContent: 'center',
    marginTop: 5,
  },

  pickerContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  picker: {
    height: 40,
    color: theme.colors.white,
    backgroundColor: theme.colors.lightBlue,
    borderRadius: 50,
  },
});

export default SignInScreen;
