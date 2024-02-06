import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Counter } from './Components/Counter';
import { ProductsList } from './Components/ProductsList';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> LM E-Commerce</Text>
      <View>
      </View>
        {/* <Counter/>  */}
        <ProductsList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  },
  header:{
    marginTop: 100,
    padding:30,
    fontSize: 30
    
  }
});
