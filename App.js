import Map from './screens/Map'
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';
import { PaperProvider } from 'react-native-paper';
import MainAppbar from './components/MainAppbar';
import React, { useState } from 'react';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';



const settings = {
  backgroundColor: '#00a484'
}

const icons = {
  location_not_known: 'crosshairs',
  location_searching: 'crosshairs-question',
  location_found: 'crosshairs-gps'
}


export default function App() {
  const [icon,setIcon] = useState(icons.location_not_known)
  const [location, setLocation] = useState({
    latitude: 65.0800,
    longitude: 25.4800,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
})

  const getUserPosition = async() => {
    setIcon(icons.location_searching)
    let {status} = await Location.requestForegroundPermissionsAsync()

    try {
        if (status !== 'granted') {
            console.log('Geolocation failed')
            return
        }
        const position = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High})
        setLocation({...location,"latitude": position.coords.latitude,"longitude": position.coords.longitude})
    }   catch(error){
        console.log(error)
    }
}


  return (
    <PaperProvider>
      <MainAppbar
        title="Map"
        backgroundColor={settings.backgroundColor}
        icon={icon}
        getUserPosition={getUserPosition}
      />
      <SafeAreaView style={styles.container}>
        <Map location={location}
        />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0
  },

  map: {
    height: '100%',
    width: '100%'
  }
});
