import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Publications from './pages/Publications.jsx'
import CV from './pages/CV.jsx'

const basename = import.meta.env.BASE_URL

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
