import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import Svg, { Rect, Path } from 'react-native-svg'

//components
import WelcomePage_1 from '../components/welcomePage/page_1/welcomePage_1'
import WelcomePage_2 from '../components/welcomePage/page_2/welcomePage_2'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomePage_1 /> */}
      <WelcomePage_2/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
