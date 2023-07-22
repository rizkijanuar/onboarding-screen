import { View, Text, StatusBar, Image, StyleSheet } from 'react-native'
import React from 'react'
import OnBoard from './components/OnBoard'
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from './assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';


const data = [
  {
    title: 'Save time by tracking your studies',
    text: 'Schedule your classes, assignments, quizzes and more',
    image: require('./assets/images/Onboard1.png'),
    bg: '#59b2ab',
  },
  {
    title: 'Stay on top of your education',
    text: 'Reduce your stress, increase your productivity',
    image: require('./assets/images/Onboard2.png'),
    bg: '#febe29',
  },
  {
    title: 'Spend more time doing the things you love',
    text: "Get started within five minutes",
    image: require('./assets/images/Onboard3.png'),
    bg: '#22bcb5',
  },
];

export default function App() {

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image}/>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    )
  }

  const keyExtractor = (item) => item.title;
  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="checkmark-outline"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    )
  }
  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="arrow-forward-outline"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    )
  }
  // DIBAWAH INI ADALAH SAMPLE UNTUK MENAMPILKAN PREV ATAU HANYA TEXT SAJA
  // const renderPrevButton = () => {
  //   return (
  //     <View>
  //       <Text>
  //         Prev
  //       </Text>
  //     </View>
  //   )
  // }  


  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        // renderPrevButton={renderPrevButton} RENDER UNTUK PREV NYA
        showPrevButton // RENDER UNTUK PREV NYA
        data={data}
      />
   </View>
  )
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },  
  image: {
    marginVertical: 60, // ini mirip dengan marbom
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.black,
    marginHorizontal: 60, // ini mirip dengan margin kanan kirinya
  },
  text: {
    fontSize: 14,
    color: colors.gray,
    textAlign: 'center',
    marginHorizontal: 60, // ini mirip dengan margin kanan kirinya
    marginTop: 20,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})