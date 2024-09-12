import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const ElectricalBillScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.billContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Electrical Bill Overview</Text>
        </View>

        <View style={styles.accountContainer}>
          <Text style={styles.label}>Customer Account Number (CAN):</Text>
          <Text style={styles.accountNumber}>1241241343421</Text>
        </View>

        <View style={styles.dueDateContainer}>
          <Text style={styles.label}>Due Date:</Text>
          <Text style={styles.dueDate}>Oct 18, 2023</Text>
        </View>

        <View style={styles.amountContainer}>
          <Text style={styles.label}>Please Pay</Text>
          <Text style={styles.amount}>₱ 5,643.50</Text>
        </View>

        <View style={styles.billDetailsContainer}>
          <Text style={styles.billSummaryTitle}>Bill Computation Summary</Text>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Remaining Balance from previous bill</Text>
            <Text style={styles.rowValue}>0.00</Text>
          </View>
          <Text style={styles.billChargesTitle}>Charges for this billing period</Text>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Generation</Text>
            <Text style={styles.rowValue}>5,404.24</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Transmission</Text>
            <Text style={styles.rowValue}>200.12</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>System Loss</Text>
            <Text style={styles.rowValue}>12.32</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Distribution (Meralco)</Text>
            <Text style={styles.rowValue}>100.56</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Subsidies</Text>
            <Text style={styles.rowValue}>12.00</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Government Taxes</Text>
            <Text style={styles.rowValue}>15.13</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Universal Charges</Text>
            <Text style={styles.rowValue}>10.20</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Fit-All (Renewable)</Text>
            <Text style={styles.rowValue}>0.00</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>TOTAL AMOUNT DUE</Text>
            <Text style={styles.totalValue}>₱ 5,643.50</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadText}>Download PDF receipt</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1a1b41',
    alignItems: 'center',
    padding: 20,
  },
  billContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: '100%',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  accountContainer: {
    backgroundColor: '#4050E7',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  label: {
    color: '#000',
    fontWeight: 'bold',
  },
  accountNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  dueDateContainer: {
    marginBottom: 10,
  },
  dueDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  amountContainer: {
    backgroundColor: '#4050E7',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  amount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  billDetailsContainer: {
    marginBottom: 20,
  },
  billSummaryTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  billChargesTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  rowLabel: {
    fontSize: 14,
  },
  rowValue: {
    fontSize: 14,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#000',
  },
  totalLabel: {
    fontWeight: 'bold',
  },
  totalValue: {
    fontWeight: 'bold',
  },
  downloadButton: {
    backgroundColor: '#4050E7',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  downloadText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ElectricalBillScreen;
