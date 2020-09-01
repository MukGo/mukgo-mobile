import OverViewScreen from './src/screens/OverViewScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const navigator = createStackNavigator(
  {
    OverView: OverViewScreen,
  },
  {
    initialRouteName: 'OverView',
    defaultNavigationOptions: {
      title: 'MukGo',
    },
  }
);

export default createAppContainer(navigator);

