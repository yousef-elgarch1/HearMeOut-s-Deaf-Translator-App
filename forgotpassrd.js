import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '../../constants/theme'
import { wp, hp } from '../../helpers/common'; // Adjust the path based on your project structure
import { useRouter } from 'expo-router';//hada drori bax nlieniw wentre les pages

const forgotpassrd = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Forgot password</Text>
      <Text style = {styles.subtitle}>Enter your mail address below and we will send you an email to Change your password correctly.</Text>
      <View>
        <TextInput placeholder ='Enter your email' style={styles.textinput}/>
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
            <Text style={styles.btntext}>Send</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default forgotpassrd


const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal:20,
    paddingTop:20,
  },
  title: {
    fontSize: hp(4),
    fontWeight: 'bold',
    color: theme.colors.black,
    marginVertical:20,
  },
  subtitle: {
    fontWeight:'500',
    color: theme.colors.black,
  },
  textinput: {
    borderBottomColor: theme.colors.black,
    borderBottomWidth:1,
    fontSize: theme.radius.xl,
    paddingVertical: 10,
    marginVertical:30,
    color: theme.colors.black,
  },
  button:{
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

})