/* eslint-disable @typescript-eslint/no-shadow */

import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  PaymentDetails: { methodId: number };
};

const data = {
  payableAmount: '₱ 5,643.50',
  month: 'Oct 2023',
  currentRates: {
    amount: '₱10.899 per kWh',
    change: '+21.01%',
  },
  history: [
    { id: 1, status: 'Paid Bill', date: 'Oct 09, 2023, 1:12 PM', amount: '₱ 5,643.50' },
    { id: 2, status: 'Paid Bill', date: 'Oct 09, 2023, 1:12 PM', amount: '₱ 5,643.50' },
    { id: 3, status: 'Paid Bill', date: 'Oct 09, 2023, 1:12 PM', amount: '₱ 5,643.50' },
  ],
  paymentMethods: [
    { id: 1, method: 'Gcash', date: 'May 24, 2022' },
    { id: 2, method: 'Maya', date: 'May 24, 2022' },
    { id: 3, method: 'Apple Pay', date: 'May 8, 2022' },
  ],
};

const PaymentsScreen: React.FC = () => {
  const {
    payableAmount,
    month,
    currentRates: { amount, change },
    history,
    paymentMethods,
  } = data;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Payable Amount Section */}
      <LinearGradient colors={["#00A4FF", "#0D82C4"]}style={styles.payableContainer} >
          <Text style={styles.monthText}>{month}</Text>
          <Text style={styles.amountText}>{payableAmount}</Text>
          <Text style={styles.labelText}>Payable Amount</Text>
      </LinearGradient>

      {/* Current Rates Section */}
      <View style={styles.currentRatesContainer}>
        <Text style={styles.currentRatesTitle}>As of {month}</Text>
        <Text style={styles.currentRatesValue}>{amount}</Text>
        <Text style={styles.currentRatesChange}>{change}</Text>
      </View>

      {/* History Section */}
      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>History</Text>
        {history.map(({ id, status, date, amount }) => (
          <View key={id} style={styles.historyItem}>
            <Text style={styles.historyText}>{status}</Text>
            <Text style={styles.historyDate}>{date}</Text>
            <Text style={styles.historyAmount}>{amount}</Text>
          </View>
        ))}
      </View>

      {/* Payment Methods Section */}
      <View style={styles.paymentMethodsContainer}>
        <Text style={styles.paymentMethodsTitle}>Payment Methods</Text>
        {paymentMethods.map(({ id, method, date }) => (
          <TouchableOpacity
            key={id}
            style={styles.paymentMethodItem}
          >
            <View>
              <Text style={styles.paymentMethodText}>{method}</Text>
              <Text style={styles.paymentMethodDate}>{date}</Text>
            </View>
            <TouchableOpacity
              style={styles.payButton}
              onPress={() => navigation.navigate('PaymentDetails', { methodId: id })}
            >
              <Text style={styles.payButtonText}>PAY</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default PaymentsScreen;

const styles = StyleSheet.create({
  container: {
    rowGap: 20,
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "whitesmoke",
  },
  payableContainer: {
    backgroundColor: '#4050E7',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  monthText: {
    fontSize: 16,
    color: '#fff',
  },
  amountText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  labelText: {
    fontSize: 14,
    color: '#fff',
  },
  currentRatesContainer: {
    rowGap: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
  },
  currentRatesTitle: {
    fontSize: 16,
    color: '#333',
  },
  currentRatesValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  currentRatesChange: {
    fontSize: 14,
    color: '#4050E7',
  },
  historyContainer: {
    rowGap: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
  },
  historyTitle: {
    color: "#0D82C4",
    fontSize: 18,
    fontWeight: 'bold',
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  historyText: {
    fontSize: 16,
    color: '#2ecc71',
  },
  historyDate: {
    fontSize: 14,
    color: '#777',
  },
  historyAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentMethodsContainer: {
    rowGap: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    // elevation: 2,
  },
  paymentMethodsTitle: {
    color: "#0D82C4",
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentMethodItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentMethodText: {
    fontSize: 16,
  },
  paymentMethodDate: {
    fontSize: 14,
    color: '#777',
  },
  payButton: {
    backgroundColor: '#00c853',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  payButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});