import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import UserListScreen from './Screens/UserListScreen';
import UserDetailScreen from './Screens/UserDetailScreen';

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={UserListScreen} name='UsersList' />
        <Stack.Screen component={UserDetailScreen} name='UserDetails' />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


