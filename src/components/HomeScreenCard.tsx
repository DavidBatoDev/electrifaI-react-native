// HomeScreenCard.tsx
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreenCard({
  title,
  content,
  subContent,
  modalID,
}) {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={["#00A4FF", "#0D82C4"]} style={styles.cardContainer}>
      <TouchableOpacity
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
              <Text style={styles.cardTitle}>{title}</Text>
              <Text style={styles.cardValue}>{content}</Text>
              <Text style={styles.cardSubContent}>{subContent}</Text>
            </View>

      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: windowWidth - 40,
    padding: 20,
    backgroundColor: '#00A4FF',
    borderRadius: 16,
    // elevation: 1,
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
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  cardValue: {
    fontSize: 32,
    fontWeight: '500',
    color: 'white', 
    marginTop: 10,
  },
  cardSubContent: {
    fontSize: 15,
    color: 'white',
    marginTop: 5,
  },
});
