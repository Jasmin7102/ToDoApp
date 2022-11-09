//import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Task from '../screens/Task';
import Detail from '../screens/Detail';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Details"
          component={Detail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Task"
          component={Task}
          options={{headerTitle: 'Add new Task'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
