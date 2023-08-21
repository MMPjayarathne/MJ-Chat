import { useState } from 'react'

import './styles/App.css'

import AuthPage from './AuthPage'
import ChatsPage from './ChatsPage'

function App() {
 

  if (!user) {
    return <AuthPage />
  } else {
    return <ChatsPage  />
  }
}

export default App
