import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, Modal, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Picker from '@react-native-picker/picker';


const HomeDriver = ({navigation}) => {
    const [rides, setRides] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedRide, setSelectedRide] = useState(null);
    const [requestReason, setRequestReason] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    useEffect(() => {
        fetchDriverRides();
    }, []);

    const fetchDriverRides = () => {
        const dummyRides = [
            { id: '1', passengerName: 'John Doe', pickup: 'Mall Road', dropoff: 'Airport', fare: '$5' },
            { id: '2', passengerName: 'Alice Smith', pickup: 'Office', dropoff: 'Home', fare: '$3' },
            { id: '3', passengerName: 'Bob Brown', pickup: 'Station', dropoff: 'Hotel', fare: '$7' },

            { id: '4', passengerName: 'Charlie Brown', pickup: 'Home', dropoff: 'School', fare: '$5', type: 'School Pool' },
        ];
        setRides(dummyRides);
    };

    const handleRidePress = (item) => {
        Alert.alert(
            'Ride Accepted',
            `You have accepted the ride for ${item.passengerName}. Let's get started!`,
            [{ text: 'OK' }]
        );
    };

    const handleRequestCash = (ride) => {
        setSelectedRide(ride);
        setModalVisible(true);
    };

    const submitCashRequest = () => {
        if (!requestReason) {
            Alert.alert('Error', 'Please select a reason for the cash request.');
            return;
        }

        Alert.alert('Request Submitted', `Your cash request has been submitted for ${selectedRide.passengerName}.`);

        setModalVisible(false);
        setRequestReason('');
        setAdditionalInfo('');
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => handleRidePress(item)}>
      <Text style={styles.itemText}>{item.passengerName}</Text>
      <Text style={styles.itemText}>From: {item.pickup}</Text>
      <Text style={styles.itemText}>To: {item.dropoff}</Text>
      <Text style={styles.itemText}>Fare: {item.fare}</Text>
      {item.type === 'School Pool' && <Text style={styles.schoolPoolText}>School Pool</Text>}
      <TouchableOpacity style={styles.requestButton} onPress={() => handleRequestCash(item)}>
        <Text style={styles.requestButtonText}>Request Cash</Text>
      </TouchableOpacity>
    </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Welcome to Careem</Text>
            </View>

            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 33.7891,
                        longitude: 72.6997,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker coordinate={{ latitude: 33.7891, longitude: 72.6997 }} />
                </MapView>
            </View>

            <View style={styles.driverConsole}>
                <Text style={styles.heading}>Driver Console</Text>

                <FlatList
                    data={rides}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={styles.flatList}
                />

                <View style={styles.bottomNavigation}>
                    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Driver')}>
                        <Ionicons name="home-outline" size={24} color="black" />
                        <Text style={styles.navText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
                        <Ionicons name="person-outline" size={24} color="black" />
                        <Text style={styles.navText}>Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Proposal')}>
                        <Ionicons name="construct-outline" size={24} color="black" />
                        <Text style={styles.navText}>Proposals</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('History')}>
                        <Ionicons name="basket-outline" size={24} color="black" />
                        <Text style={styles.navText}>History</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Dashboard')}>
                        <Ionicons name="information-outline" size={24} color="black" />
                        <Text style={styles.navText}>Dashboard</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Setting')}>
                        <Ionicons name="settings-outline" size={24} color="black" />
                        <Text style={styles.navText}>Settings</Text>
                    </TouchableOpacity>



                </View>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Request Cash</Text>
                        <Picker
                            selectedValue={requestReason}
                            style={styles.picker}
                            onValueChange={(itemValue) => setRequestReason(itemValue)}
                        >
                            <Picker.Item label="Select Reason" value="" />
                            <Picker.Item label="Low Fare" value="Low Fare" />
                            <Picker.Item label="Immediate Need" value="Immediate Need" />
                        </Picker>
                        <TextInput
                            style={styles.input}
                            value={additionalInfo}
                            onChangeText={setAdditionalInfo}
                            placeholder="Additional Information (Optional)"
                        />
                        <TouchableOpacity style={styles.submitButton} onPress={submitCashRequest}>
                            <Text style={styles.submitButtonText}>Submit Request</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 20,
        backgroundColor: '#3498db',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingVertical: 10,
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        marginTop: 5,
    },
    mapContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    driverConsole: {
        flex: 1,
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    flatList: {
        flexGrow: 1,
    },
    itemContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    itemText: {
        fontSize: 16,
        marginBottom: 5,
    },
    requestButton: {
        backgroundColor: '#e74c3c',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    requestButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    picker: {
        width: '100%',
        height: 50,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    submitButton: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default HomeDriver;
