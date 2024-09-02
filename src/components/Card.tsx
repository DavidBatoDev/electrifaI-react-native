import { StyleSheet, 
  Text, 
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Card({
  title,
  content,
  subContent,

}) {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View style={styles.contentWrapper}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.contentText}>{content}</Text>
        <Text style={styles.subContentText}>{subContent}</Text>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  mainContainer: {
    // main card container
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "white",
    flex: 1,
    width: windowWidth -40,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,

  },
  contentWrapper: {
    // wrapper for text elements inside card
    flex: 1,
    // backgroundColor: "yellow",
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: "grey",
  },
  contentText: {
    fontSize: 28,
  },
  subContentText: {
    fontSize: 16
  }
})