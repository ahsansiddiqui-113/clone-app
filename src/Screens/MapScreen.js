import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from '@rneui/themed'; 
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Map from '../Components/Map'; 
import NavigateCard from '../Components/NavigateCard';
import RideOptionsCard from '../Components/RideOptionCards';


const MapScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        className="absolute top-10 left-5 bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full z-50"
      >
        <Icon name="menu" type="ionicon" />
      </TouchableOpacity>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2">
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};
export default MapScreen;
