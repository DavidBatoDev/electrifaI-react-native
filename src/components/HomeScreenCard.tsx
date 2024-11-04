// HomeScreenCard.tsx
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;

interface HomeScreenCardProps {
  title: string;
  content: string;
  subContent: string;
  modalID: string;
  focused: boolean;
  subtitle?: string;
}

const HomeScreenCard: React.FC<HomeScreenCardProps> = ({
  title,
  content,
  subContent,
  modalID,
  focused,
  subtitle
}) => {
  const navigation = useNavigation<NavigationProp<any>>();

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
};

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

export default HomeScreenCard;