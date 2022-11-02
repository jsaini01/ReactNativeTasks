import React, {useState} from 'react';

// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './HomePage';
import ContactUS from './ContactUS';
import {SceneMap, TabView} from 'react-native-tab-view';
import {useWindowDimensions} from 'react-native';
// import {Text, View} from 'react-native';

// const Stack = createNativeStackNavigator();

const renderScene = SceneMap({
  home: HomePage,
  ContactUs: ContactUS,
});

function App() {
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen
  //         name="home"
  //         component={HomePage}
  //         options={{headerShown: false}}
  //       />
  //       <Stack.Screen
  //         name="contact"
  //         component={ContactUS}
  //         options={{headerShown: false}}
  //       />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'home', title: 'Home'},
    {key: 'ContactUs', title: 'ContactUs'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}

export default App;
