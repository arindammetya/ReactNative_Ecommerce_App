import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './Src/AppNavigator/AppNavigator'
import { Provider } from 'react-redux'
import Home from './Src/Screens/Home'
import Store from './Src/Redux/Store/Store'
//test

const App = () => {
  return (
    <Provider store={Store}>

      <AppNavigator/>

    </Provider>
    
  )
}

export default App