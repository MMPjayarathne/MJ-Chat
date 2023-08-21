import { useState } from 'react'

import './styles/App.css'

import Auth from './Auth'
import Chats from './Chats'

function App() {

const [user, setUser] = useState(undefined)


  if (!user) {
    return <Auth/>
  } else {
    return <Chats/>
  }
}

export default App
