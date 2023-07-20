import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { AuthProviderComponent } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProviderComponent>
        <App />
      </AuthProviderComponent>
    </HashRouter>
  </React.StrictMode>,
)
