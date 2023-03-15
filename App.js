import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import Products from "./app/components/Products";
import Cart from "./app/components/Cart";
import TestApp from "./app/components/TestApp"
import configureStore from "./app/store/ConfigureStore";

const store = configureStore();


// const Stack = createStackNavigator();

// const StackNavigator = () => (
//     <Stack.Navigator>
//       <Stack.Screen name="Products" component={Products} />
//       <Stack.Screen name="Cart" component={Cart} />
//     </Stack.Navigator>
//   );
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Products" component={Products} />
    <Tab.Screen name="Cart" component={Cart} />
  </Tab.Navigator>
);

function App() {
  return (
    <Provider store={store}>
      {/* // <TestApp/>  */}
        <NavigationContainer>
        <TabNavigator />
        {/* <StackNavigator />  */}
      </NavigationContainer>  
    </Provider>
  );
}

export default App;