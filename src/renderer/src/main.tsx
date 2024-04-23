import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/styles.scss'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { firebaseConfig } from './utils/firebaseConfig'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export const analytics = getAnalytics(app)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
