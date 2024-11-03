/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Dimensions } from 'react-native';
// import Card from '../../components/Card';
import LinearGradient from 'react-native-linear-gradient';
import BarChart from '../../components/BarChart';
import HomeScreenCard from '../../components/HomeScreenCard';
import AppBar from '../../components/AppBar';

const windowWidth = Dimensions.get('window').width;

// dummy data for the monthly consumption chart
const monthly_consumption_data = [
  { id: '1', month_in_number: 1, month: 'Jan', consumption: '95 kWh', kWh: 95 },
  { id: '2', month_in_number: 2, month: 'Feb', consumption: '90 kWh', kWh: 90 },
  { id: '3', month_in_number: 3, month: 'Mar', consumption: '85 kWh', kWh: 85 },
  { id: '4', month_in_number: 4, month: 'Apr', consumption: '88 kWh', kWh: 88 },
  { id: '5', month_in_number: 5, month: 'May', consumption: '102 kWh', kWh: 102 },
  { id: '6', month_in_number: 6, month: 'Jun', consumption: '98 kWh', kWh: 98 },
  { id: '7', month_in_number: 7, month: 'Jul', consumption: '105 kWh', kWh: 105 },
  { id: '8', month_in_number: 8, month: 'Aug', consumption: '102 kWh', kWh: 102 },
  { id: '9', month_in_number: 9, month: 'Sep', consumption: '110 kWh', kWh: 110 },
  { id: '10', month_in_number: 10, month: 'Oct', consumption: '115 kWh', kWh: 115 },
  { id: '11', month_in_number: 11, month: 'Nov', consumption: '120 kWh', kWh: 120 },
  { id: '12', month_in_number: 12, month: 'Dec', consumption: '130 kWh', kWh: 130 },
];

// interfaces 
interface DotProps {
  active: string;
}

// dummy data for the cards
const cardContents = [
  {
    id: '1',
    title: 'Average Daily Consumption',
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

const Dot = ({ active }: DotProps) => {
  return <View style={[styles.dot, { backgroundColor: active }]} />;
};


// HomeScreen component
const HomeScreen = () => {
  const [focusedItem, setFocusedItem] = useState('1');

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  // Function to determine the focused item in the FlatList
  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setFocusedItem(viewableItems[0].item.id);
    }
  }, []);

  // Function to render each item in the FlatList (scrollable monthly data)
  const renderMonthlyItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.monthText}>{item.month}</Text>
      <Text style={styles.consumptionText}>{item.consumption}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.mainContentContainer}>
      {/* experimenting with white background */}
      <LinearGradient colors={['whitesmoke', 'whitesmoke']} style={styles.mainContentContainer}> 
      <AppBar />
        <View>
          <FlatList
            contentContainerStyle={{
              padding: 25,
              gap: 10,
            }}
            data={cardContents}
            horizontal
            snapToAlignment="center"
            decelerationRate="fast"
            snapToOffsets={Array(cardContents.length)
              .fill(0)
              .map((_, index) => index * (windowWidth - 40))}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
            renderItem={({ item }) => (
              <View>
                <HomeScreenCard
                  title={item.title}
                  // subtitle={item.subtitle}
                  subContent={item.subContent}
                  content={item.content}
                  modalID={item.id}
                />
              </View>
            )}
          />
          <View style={styles.carouselNav}>
            {cardContents.map((item) => (
              <Dot key={item.id} active={focusedItem === item.id ? '#2D3142' : 'lightgrey'} />
            ))}
          </View>
        </View>

        <View style={[styles.monthlyConsumptionContainer]}>
          <Text style={[styles.mediumBoldText, { paddingVertical: 10 }]}>Monthly Consumption</Text>
          <BarChart data={monthly_consumption_data} />
          <FlatList
            data={monthly_consumption_data.slice(7, 12)}
            keyExtractor={(item) => item.id}
            renderItem={renderMonthlyItem}
            scrollEnabled={true}
            style={styles.flatList}
          />
        </View>

      </LinearGradient>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  whiteText: {
    color: '#f9f9f9',
  },
  regularText: {
    fontSize: 19,
  },
  mediumBoldText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  paddingHorizontalSmall: {
    paddingHorizontal: 20,
  },
  headerTextContainer: {
    marginTop: 20,
  },
  monthlyConsumptionHeaderText: {
    fontSize: 22,
    marginLeft: 10,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  monthlyConsumptionContainer: {
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    marginBottom: 20,
    backgroundColor: 'white',
    // backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
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
  flatList: {
    marginVertical: 10,
    backgroundColor: 'transparent',
    borderRadius: 16,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#E5E7EB',
    borderBottomWidth: 1,
  },
  monthText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  consumptionText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
  },
});
