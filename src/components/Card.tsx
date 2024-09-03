import { StyleSheet, 
  Text, 
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Card({
  title,

  subtitle,
  subtitle,
  content,
  subContent,
  modalID
}) {

  const navigation = useNavigation();
  return (

    <TouchableOpacity style={styles.mainContainer}
    onPress={() => {
      // on press of card, determine modal id and navigate accordingly
      switch(modalID) {
        case "1":
          console.log('true')
          navigation.navigate('Daily Consumption Modal')
          // add cases for more modal screens
      }

    }}
    >
      <View style={styles.contentWrapper}>
        <Text style={styles.mediumBoldText}>{title}</Text>
        <Text style={styles.smallText}>{subtitle}</Text>
        <Text>----- insert chart here ----</Text>
        <Text>----- insert chart here ----</Text>
        <Text>----- insert chart here ----</Text>
        <Text>----- insert chart here ----</Text>
        <Text>----- insert chart here ----</Text>
        <View style={{
          // put elements at the bottom
          marginTop: "auto"
        }}>
          <Text style={styles.largeRegularText}>{content}</Text>
          <Text style={styles.smallText}>{subContent}</Text>
        </View>
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
    height: 250,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
  },
  contentWrapper: {
    // wrapper for text elements inside card

    flex: 1,
    rowGap: 2,
  },
  // text presets
  mediumBoldText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: "grey",
  },
  largeRegularText: {
    fontSize: 28,
  },
  regularText: {
    fontSize: 16
  },
  smallText: {
    fontSize: 14,
    color: "lightgrey",
  }
  
})