import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { ProductsList } from './Components/ProductsList';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> LM SHOP</Text>
      <View>
      </View>
        <ProductsList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#780000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  },
  header:{
    color: '#fdf0d5',
    marginTop: 10,
    padding:30,
    fontSize: 30,
    
  }
});
