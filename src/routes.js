import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import Product from './pages/product';

const RootStack = createStackNavigator({
  Home: { screen: Main },
  Product: { screen: Product }
},
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#2980b9"
      }
    }
  }
);

const Routes = createAppContainer(RootStack);

export default Routes;