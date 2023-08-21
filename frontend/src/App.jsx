import { useState } from 'react'

import './styles/App.css'

import Auth from './Auth'
import Chats from './Chats'

function App() {

  if (!user) {
    return <Auth/>
  } else {
    return <Chats/>
  }
}

export default App
