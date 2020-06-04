import React from 'react'
import { StatusBar } from 'react-native'

import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  )
}

export default App
