import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home/info" options={{ headerShown: false }} />
      <Stack.Screen name="home/signin" options={{ headerShown: false }} />
      <Stack.Screen name="home/forgotpassrd" options={{ headerShown: false }} />
      <Stack.Screen name="home/choosepage" options={{ headerShown: false }} />

      {/* volunteer */}
      <Stack.Screen name="home/screenVolunteer/volunteerHome/VHome" options={{ headerShown: false }} />
      <Stack.Screen name="home/screenVolunteer/volunsignup" options={{ headerShown: false }} />
      <Stack.Screen name="home/screenVolunteer/volunteerHome/SOS" options={{ headerShown: false }} />
      <Stack.Screen name="home/screenVolunteer/volunteerHome/call" options={{ headerShown: false }} />
              <Stack.Screen name="home/screenVolunteer/volunteerHome/soscase" options={{ headerShown: false }} />
      <Stack.Screen name="home/screenVolunteer/volunteerHome/VasLanguage" options={{ headerShown: false }} />
      <Stack.Screen name="home/screenVolunteer/volunteerHome/VBot" options={{ headerShown: false }} />
      <Stack.Screen name="home/screenVolunteer/volunteerHome/Vchat" options={{ headerShown: false }} />
      <Stack.Screen name="home/screenVolunteer/volunteerHome/Vnews" options={{ headerShown: false }} />
      <Stack.Screen name="home/screenVolunteer/volunteerHome/Vbot/Assistant" options={{ headerShown: false }} />
      <Stack.Screen name="home/screenVolunteer/volunteerHome/Vbot/features" options={{ headerShown: false }} />
       
      {/* deaf */}
      <Stack.Screen name="home/screenDeaf/deafHome" options={{ headerShown: false }} />
      <Stack.Screen name="home/screenDeaf/deafsignup" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
