import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { HashRouter, Routes, Route } from 'react-router-dom'
import Publications from './pages/Publications.jsx'
import CV from './pages/CV.jsx'
import Contacts from './pages/Contacts.jsx'

// When deploying to GitHub Pages it's simpler to use HashRouter so
// client-side routes work without a server rewrite. URLs will look like
// /my-portfolio/#/cv
const basename = import.meta.env.BASE_URL

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
