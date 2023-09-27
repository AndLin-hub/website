import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { inject } from '@vercel/analytics';
import { Analytics } from '@vercel/analytics/react';
import './index.css'
inject();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Analytics/>
    <App />
  </React.StrictMode>,
)
