import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';



const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>This is our Home asdasdasdasdasdasdasdasdas</Text>
        <StatusBar style="auto" />
    </View>
    </SafeAreaView>
    
  );
}

export default Home;


const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    justifyContent: 'center'
  }
});