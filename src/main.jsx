import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/theme.context.jsx'
import {WeatherProvider} from './context/weather.context.jsx'
createRoot(document.getElementById('root')).render(
<ThemeProvider>
    <WeatherProvider>
 <App />
    </WeatherProvider>

</ThemeProvider>
   

)
