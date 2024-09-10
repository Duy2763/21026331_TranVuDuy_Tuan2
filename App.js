
import {Text, View, Image, TextInput, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
import HomeContent from './components/content';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Result from './components/result';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  
  const Stack = createNativeStackNavigator();
  return (
    

    <SafeAreaProvider>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Home"
                  component={HomeContent}
                  options={{title: ''}}
                />
                <Stack.Screen name="Result" component={Result} />
              </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}


