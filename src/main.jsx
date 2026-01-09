import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/600.css"; 
import "@fontsource/poppins/700.css";
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import portfolioStore from "./store/index.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={portfolioStore}>
      <App />
    </Provider>
  </StrictMode>,
)
