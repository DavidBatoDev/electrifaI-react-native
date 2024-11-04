// HomeScreenCard.tsx
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';

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

  console.log('modalID', modalID, 'focused', focused);

  return (
    <Card
      style={[styles.cardContainer, { backgroundColor: focused ? '#F9F9F9' : '#FFFFFF' }]}
      onPress={() => {
        switch (modalID) {
          case '1':
            navigation.navigate('Daily Consumption Modal');
            break;
          // Add more cases if needed
        }
      }}
    >
      <Card.Content>
        <Title style={styles.cardTitle}>{title}</Title>
        <Paragraph style={styles.cardValue}>{content}</Paragraph>
        <Paragraph style={styles.cardSubContent}>{subContent}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: windowWidth - 40,
    marginVertical: 10,
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
    color: '#000000', 
    paddingTop: 20,
  },
  cardSubContent: {
    fontSize: 15,
    color: 'white',
    marginTop: 5,
  },
});

export default HomeScreenCard;