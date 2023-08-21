import { useState } from 'react'

import './styles/App.css'

import Auth from './Auth'
import Chats from './Chats'

function App() {

const [user, setUser] = useState(undefined)


  if (!user) {
    return <Auth onAuth={user => setUser(user)}/>
  } else {
    return <Chats user={user}/>
  }
}

export default App
