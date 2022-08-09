import React from 'react'
import api from './services/api'
import { BrowserRouter as Router } from 'react-router-dom';


import './global.css'
import './App.css'
import Routes from './Routes'
import {AuthProvider} from './hooks/Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes/>
      </Router>
    </AuthProvider>
  )
}

export default App;