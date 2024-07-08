import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ProposalsScreen = () => {
  const [proposals, setProposals] = useState([]);
  const [acceptedProposals, setAcceptedProposals] = useState([]);

  useEffect(() => {
    fetchProposals(); 
    fetchAcceptedProposals(); 
    rejectProposal();
  }, []);

  const fetchProposals = () => {
    const mockProposals = [
      { id: 1, passengerName: 'Ahsan', proposalTime: new Date() },
      { id: 2, passengerName: 'zulkifal', proposalTime: new Date() },
      { id: 3, passengerName: 'awais', proposalTime: new Date() },
    ];
    setProposals(mockProposals);
  };

  const fetchAcceptedProposals = () => {
    const mockAcceptedProposals = [
      { id: 1, passengerName: 'bilal', fromLocation: 'Islamabad', toLocation: 'Rawalpindi' },
      { id: 2, passengerName: 'zeeshan', fromLocation: 'Karachi', toLocation: 'Lahore' },
    ];
    setAcceptedProposals(mockAcceptedProposals);
  };

  const acceptProposal = (proposalId) => {
    console.log(`Accepted proposal with ID ${proposalId}`);
    const acceptedProposal = proposals.find(proposal => proposal.id === proposalId);
    setProposals(proposals.filter(proposal => proposal.id !== proposalId));
    setAcceptedProposals([...acceptedProposals, acceptedProposal]);
    Alert.alert('Proposal Accepted', `You have accepted proposal ID ${proposalId}`);
  };

  const rejectProposal = (proposalId) => {
    console.log(`Rejected proposal with ID ${proposalId}`);
    setProposals(proposals.filter(proposal => proposal.id !== proposalId));
    Alert.alert('Proposal Rejected', `You have rejected proposal ID ${proposalId}`);
  };

  const renderProposalItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.passengerName}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={() => acceptProposal(item.id)}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.rejectButton]} onPress={() => rejectProposal(item.id)}>
          <Text style={styles.buttonText}>Reject</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Render each accepted proposal item in FlatList
  const renderAcceptedProposalItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.passengerName}</Text>
      <Text style={styles.itemDetail}>{`${item.fromLocation} to ${item.toLocation}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Proposals Screen</Text>
      <Text style={styles.subheading}>Received Proposals</Text>
      <FlatList
        data={proposals}
        renderItem={renderProposalItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
        ListEmptyComponent={<Text style={styles.emptyText}>No proposals at the moment.</Text>}
      />
      <Text style={styles.subheading}>Accepted Proposals</Text>
      <FlatList
        data={acceptedProposals}
        renderItem={renderAcceptedProposalItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
        ListEmptyComponent={<Text style={styles.emptyText}>No accepted proposals at the moment.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#555',
  },
  itemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemDetail: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptButton: {
    backgroundColor: '#66bb6a',
  },
  rejectButton: {
    backgroundColor: '#ef5350',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ProposalsScreen;
