/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, useRef, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Dimensions } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import Card from '../../components/Card';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const cardContents = [
  {
    id: '1',
    title: 'Avg. Daily Consumption',
    subtitle: 'Learn more about your daily consumption habits.',
    content: '5.67 kWh',
    subContent: 'As of 10:34 PM',
  },
  {
    id: '2',
    title: 'Monthly Consumption',
    subtitle: 'Track your monthly usage.',
    content: '102 kWh',
    subContent: 'August 2023',
  },
  {
    id: '3',
    title: 'Yearly Consumption',
    subtitle: 'Track your yearly usage.',
    content: '1200 kWh',
    subContent: '2023',
  },
];

const Dot = ({ active }) => {
  return <View style={[styles.dot, { backgroundColor: active }]} />;
};

const HomeScreen = () => {
  const [focusedItem, setFocusedItem] = useState('1');

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setFocusedItem(viewableItems[0].item.id);
    }
  }, []);

  // Dummy data for the VictoryBar chart
  const data = [
    { month: 'May', kWh: 102 },
    { month: 'June', kWh: 98 },
    { month: 'July', kWh: 105 },
    { month: 'August', kWh: 102 },
    { month: 'September', kWh: 110 },
  ];

  return (
    <ScrollView style={styles.mainContentContainer}>
      <Text style={[styles.regularText, styles.paddingHorizontalSmall]}>Hey there, User</Text>
      <Text style={[styles.mediumBoldText, styles.paddingHorizontalSmall]}>Avg. Daily Consumption</Text>
      <View>
        <FlatList
          contentContainerStyle={{
            paddingLeft: 20,
            marginVertical: 20,
          }}
          data={cardContents}
          horizontal
          snapToAlignment="center"
          decelerationRate="fast"
          snapToOffsets={Array(cardContents.length).fill(0).map((_, index) => index * (windowWidth - 40))}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          renderItem={({ item }) => (
            <View>
              <Card title={item.title} subtitle={item.subtitle} content={item.content} subContent={item.subContent} modalID={item.id} />
            </View>
          )}
        />
        <View style={styles.carouselNav}>
          {cardContents.map((item) => (
            <Dot key={item.id} active={focusedItem === item.id ? 'lightblue' : 'lightgrey'} />
          ))}
        </View>
      </View>
      <Text style={[styles.mediumBoldText, styles.paddingHorizontalSmall]}>Monthly Consumption</Text>
      <View style={[styles.monthlyConsumptionContainer, styles.paddingHorizontalSmall]}>
        <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 20 }}>
          <VictoryBar data={data} x="month" y="kWh" style={{ data: { fill: 'blue' } }} />
        </VictoryChart>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContentContainer: {
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  regularText: {
    fontSize: 16,
  },
  mediumBoldText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  paddingHorizontalSmall: {
    paddingHorizontal: 20,
  },
  monthlyConsumptionContainer: {
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'lightgrey',
  },
  carouselNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    columnGap: 5,
  },
});
