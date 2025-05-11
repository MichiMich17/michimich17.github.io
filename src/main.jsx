import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <TonConnectUIProvider manifestUrl="https://ton-manifest-hosting.pages.dev/tonconnect-manifest.json" >
    
    <App />
  </TonConnectUIProvider>,
)
