import { SafeAreaView } from 'react-native'
import React from 'react'
import First from './pages/first/First'
import Second from './pages/second/Second'
import { Provider } from 'react-redux'
import { store } from './app/store'

const Router = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex:1}}>
        <First/>
        <Second/>
      </SafeAreaView>
    </Provider>
  )
}

export default Router