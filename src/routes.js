import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/main';

const RootStack = createStackNavigator({
    Home: { screen: Main },
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