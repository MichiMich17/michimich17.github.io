import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <TonConnectUIProvider manifestUrl="https://michimich17.github.io/tonconnect-manifest.json">
    <App />
  </TonConnectUIProvider>,
)
