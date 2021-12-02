import React,{Component} from 'react';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabScreen from './src/screens/BottomTabScreen'

export default class App extends Component {

  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
  }

  render() {
    return (
      <NavigationContainer>
        <BottomTabScreen/>
      </NavigationContainer>
    )
  }
}
