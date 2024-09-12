import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ConsumptionLineChart from '../../components/ConsumptionLineChart'; // Import the chart component
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';

const TrackConsumption = () => {
    const route = useRoute();
    const { consumptionId } = route.params; // eto yung id na pinasa natin para ma fetch yung scatter points, pasa nalang sa chart pag meron na

    const data = [ // sample data for scatter points, since wala pa tayong api
        { x: 1, y: 49 },
        { x: 2, y: 55 },  
        { x: 3, y: 60 },  
        { x: 4, y: 69 },  
        { x: 5, y: 70 }, 
        { x: 6, y: 76 }, 
      ];
    
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Ionicons name="battery-charging-outline" size={24} color="black" />
        <Text style={styles.headerText}>ElectrifAI</Text>
      </View>

      {/* Line Chart */}
      <ConsumptionLineChart data={data} />

      {/* Notification Card */}
      <View style={styles.notificationCard}>
        <Ionicons name="alert-circle-outline" size={24} color="#F59E0B" style={styles.notificationIcon} />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Leakage</Text>
          <Text style={styles.cardDescription}>
            He'll want to use your yacht, and I don't want this thing smelling like fish.
          </Text>
        </View>
      </View>

      {/* Causes Card */}
      <View style={styles.possibleCausesCard}>
        <Text style={styles.cardTitle}>Possible Causes</Text>

        <View style={styles.causeItem}>
          <Ionicons name="information-circle-outline" size={18} color="black" />
          <Text style={styles.causeText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>
        </View>

        <View style={styles.causeItem}>
          <Ionicons name="information-circle-outline" size={18} color="black" />
          <Text style={styles.causeText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>
        </View>

        <View style={styles.causeItem}>
          <Ionicons name="information-circle-outline" size={18} color="black" />
          <Text style={styles.causeText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default TrackConsumption;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 16,
    elevation: 4,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  notificationIcon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
  possibleCausesCard: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 16,
    elevation: 4,
    marginBottom: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  causeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  causeText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#6B7280',
  },
});
