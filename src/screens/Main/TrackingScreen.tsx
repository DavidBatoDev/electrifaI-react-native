import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const blueLineChart = require('../../assets/images/blueLineChart.png');
const redLineChart = require('../../assets/images/redLineChart.png');

const TrackingScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <LinearGradient colors={['whitesmoke', 'whitesmoke']} style={styles.linearGradient}>
      <StatusBar backgroundColor={"#00A4FF"}></StatusBar>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        {/* Leakage Notification Card */}
        <View style={styles.notificationCard}>
          <View style={styles.iconContainer}>
            <Ionicons name="alert-circle" size={28} color="#F59E0B" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Leakage</Text>
            <Text style={styles.cardDescription}>
              He'll want to use your yacht, and I don't want this thing smelling like fish.
            </Text>
          </View>
        </View>

        {/* Anomaly Detection Card */}
        <TouchableOpacity 
        activeOpacity={0.8} 
        onPress={() => navigation.navigate('Track Consumption', {
          consumptionId: '1'
        })}

        style={styles.statCard}>
          <View style={styles.statHeader}>
            <Ionicons name="stats-chart-outline" size={28} color="#000" />
            <View style={styles.statHeaderTitle}>
              <Text style={styles.statTitle}>Anomaly Detection</Text>
              <Text style={styles.statSubtitle}>Statistics</Text>
            </View>
          </View>
          <View style={styles.statContent}>
            <Text style={styles.statValue}>+12 kWh</Text>
            <Text style={styles.statPercentage}>
              <Text style={styles.greenText}>+21.01%</Text>
              <Ionicons name="md-arrow-up" size={16} color="green" />
            </Text>
          </View>
          <Image source={blueLineChart} style={styles.chartImage} />
          <Text style={styles.statDescription}>
            Spikes in electrical usage may hint at a possible power leak.
          </Text>
        </TouchableOpacity>

        {/* Visit Duration Card */}
        <TouchableOpacity 
          activeOpacity={0.8} 
          onPress={() => navigation.navigate('Track Consumption', {
            consumptionId: '1'
          })}
          style={styles.statCard}
        >
          <View style={styles.statHeader}>
            <Ionicons name="battery-charging-outline" size={28} color="#000" />
            <View style={styles.statHeaderTitle}>
              <Text style={styles.statTitle}>Visit Duration</Text>
              <Text style={styles.statSubtitle}>Statistics</Text>
            </View>
          </View>
          <View style={styles.statContent}>
            <Text style={styles.statValue}>5m 8s</Text>
            <Text style={styles.statPercentage}>
              <Text style={styles.redText}>-7.69%</Text>
              <Ionicons name="md-arrow-down" size={16} color="red" />
            </Text>
          </View>
          <Image source={redLineChart} style={styles.chartImage} />
          <Text style={styles.statDescription}>
            Spikes in electrical usage may hint at a possible power leak.
          </Text>
        </TouchableOpacity>

        {/* Footer Notification */}
        <View style={styles.footerCard}>
          <Ionicons name="checkmark-circle" size={24} color="green" />
          <Text style={styles.footerText}>All sensors are working well.</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default TrackingScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1, 
  },
  scrollViewContent: {
    // padding: 10, // Padding for ScrollView content
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexGrow: 1, // Ensures ScrollView stretches to fit content
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    // elevation: 4,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  iconContainer: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
  },
  cardDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
  statCard: {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    // elevation: 4,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statHeaderTitle: {
    marginLeft: 10,
  },
  statTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
  },
  statSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 10,
  },
  statContent: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  statPercentage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greenText: {
    color: 'green',
    fontWeight: '600',
  },
  redText: {
    color: 'red',
    fontWeight: '600',
  },
  chartImage: {
    position: 'absolute',
    right: -60,
    top: 50,
    width: windowWidth - 80,
    height: 100,
    resizeMode: 'contain',
  },
  statDescription: {
    fontSize: 16,
    color: 'black',
  },
  footerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    // elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  footerText: {
    fontSize: 14,
    marginLeft: 10,
    color: '#1E293B',
  },
});