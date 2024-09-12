// HomeScreenCard.tsx
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreenCard({
  title,
  content,
  subContent,
  modalID,
  focused,
  subtitle
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        switch (modalID) {
          case '1':
            navigation.navigate('Daily Consumption Modal');
            break;
          // Add more cases if needed
        }
      }}
    >
      <View style={styles.cardContent}>
        <View>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardValue}>{content}</Text>
          <Text style={styles.cardSubContent}>{subContent}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: windowWidth - 40,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    display: 'flex',
  },
  cardContent: {
    justifyContent: 'space-between',
    height: 120,
    scaleX: 24,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: '#333',
  },
  cardValue: {
    fontSize: 32,
    fontWeight: '500',
    color: '#000000', 
    marginTop: 10,
  },
  cardSubContent: {
    fontSize: 15,
    color: '#666',
    marginTop: 5,
  },
});
