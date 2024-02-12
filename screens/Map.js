import React from 'react';
import { useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function Map()   {

    const [location, setLocation] = useState({
        latitude: 65.0800,
        longitude: 25.4800,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    })

    return(
        <MapView 
        region={location}
        style={styles.map}
        />
    )
}

const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%'
    }
});