import { StyleSheet, 
  Text, 
  View,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native'

import React from 'react'
import Card from '../../components/Card'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const cardContents = [
  {
  id: "1",
  title: "Avg. Daily Consumption",
  subtitle: "Learn more about your daily consumption habits.",
  content: "5.67 kWh",
  subContent: "10:34 PM"
  },
  {
  id: "2",
  title: "<title content>",
  subtitle: "<subtitle>",
  content: "<content/measurement>",
  subContent: "<subcontent/time>"
  },
  {
  id: "3",
  title: "<title content>",
  subtitle: "<subtitle>",
  content: "<content/measurement>",
  subContent: "<subcontent/time>"
  },
]


const HomeScreen = () => {
  return (
    <ScrollView style={styles.mainContentContainer}>
      <Text style={[styles.regularText, styles.paddingHorizontalSmall]}>Hey there,</Text>
      <Text style={[styles.mediumBoldText, styles.paddingHorizontalSmall]}>Bato Bato</Text>
      <View style={{
      }}>
        <FlatList

        contentContainerStyle={{
          paddingLeft: 20,
          marginVertical: 20
        }}
        scrollEnabled={true}
        data={cardContents}
        horizontal
        snapToAlignment='center'
        decelerationRate='normal'
        snapToOffsets={[windowWidth, windowWidth-20,windowWidth]}
        snapToEnd={true}
        ListFooterComponent={() => <View style={{width: 20}}></View>}
        ItemSeparatorComponent={() => <View style={{width: 20}}></View>}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        // set key as id key value pair
        renderItem={({item}) => {
          return (
            <View style={{
            }}>
                <Card
                title={item.title}
                subtitle={item.subtitle}
                content={item.content}
                subContent={item.subContent}
                modalID = {item.id}
                ></Card>

            </View>
          )
        }}
        >
        </FlatList>
      </View>
      <Text style={[styles.mediumBoldText, styles.paddingHorizontalSmall]}>Monthly Consumption</Text>
      <View style={[styles.monthlyConsumptionContainer, styles.paddingHorizontalSmall]}>
        <View>
          <Text>Chart goes here!</Text>
          <Text>Chart goes here!</Text>
          <Text>Chart goes here!</Text>
          <Text>Chart goes here!</Text>
        </View>
      </View>

    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  mainContentContainer: {
    paddingVertical: 20,
    backgroundColor: "white",
  },
  regularText: {
    fontSize: 16,
  },
  mediumBoldText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  paddingHorizontalSmall: {
    paddingHorizontal: 20

  },
  monthlyConsumptionContainer: {
    marginVertical: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius:10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  }

})