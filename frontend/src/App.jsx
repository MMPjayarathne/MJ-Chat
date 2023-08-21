import { useState } from 'react'

import './styles/App.css'

import Auth from './Auth'
import Chats from './Chats'

function App() {

  if (!true) {
    return <Auth/>
  } else {
    return <Chats/>
  }
}

export default App
