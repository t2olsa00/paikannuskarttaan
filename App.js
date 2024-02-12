import Map from './screens/Map'
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Map/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0
  },
});
