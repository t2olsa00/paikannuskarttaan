import React from 'react';
import { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';

export default function Map(props)   {





    /*useEffect(() => {
        (async() => {
            getUserPosition()
        })()
    }, [])*/

    return(


        <MapView 
        region={props.location}
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