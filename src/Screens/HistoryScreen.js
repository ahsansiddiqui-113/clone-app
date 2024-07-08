import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import History from './History';

const HistoryScreen = () => {
  const [history, setHistory] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredHistory, setFilteredHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  useEffect(() => {
    applyFilter();
  }, [history, filter]);

  const fetchHistory = () => {
    // Mock data for demonstration
    const mockHistory = [
      { id: 1, passengerName: 'John Doe', fromLocation: 'A', toLocation: 'B', status: 'Completed', date: new Date() },
      { id: 2, passengerName: 'Jane Smith', fromLocation: 'C', toLocation: 'D', status: 'Canceled', date: new Date() },
      { id: 3, passengerName: 'Ahsan', fromLocation: 'E', toLocation: 'F', status: 'Rejected', date: new Date() },
    ];
    setHistory(mockHistory);
  };

  const applyFilter = () => {
    let filteredData = history;
    if (filter !== 'all') {
      filteredData = history.filter(ride => ride.status === filter);
    }
    setFilteredHistory(filteredData.sort((a, b) => new Date(b.date) - new Date(a.date)));
  };

  const renderHistoryItem = ({ item }) => (
    <View style={styles.historyItem}>
      <Text style={styles.historyText}>Passenger: {item.passengerName}</Text>
      <Text style={styles.historyText}>From: {item.fromLocation}</Text>
      <Text style={styles.historyText}>To: {item.toLocation}</Text>
      <Text style={styles.historyText}>Status: {item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Ride History</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={filter}
          onValueChange={(itemValue) => setFilter(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="All" value="all" />
          <Picker.Item label="Completed" value="Completed" />
          <Picker.Item label="Canceled" value="Canceled" />
          <Picker.Item label="Rejected" value="Rejected" />
        </Picker>
      </View>
      <FlatList
        data={filteredHistory}
        renderItem={renderHistoryItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>No historical rides available.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingTop: 20,
    color: 'black',
  },
  pickerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  listContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  emptyText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
  },
  historyItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  historyText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default HistoryScreen;
