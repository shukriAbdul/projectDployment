import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'

import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />

<App/>
<Footer/>
   
  </React.StrictMode>,
)
