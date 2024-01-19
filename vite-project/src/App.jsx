import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [prompt,setPrompt]=useState("");
  const [units,setUnits]=useState("metric");
  const [weatherDataLoading,setWeatherDataLoading]=useState(false);
  const [weatherDescriptionLoading,setWeatherDescriptionLoading]=useState(false);
  const [errorMsg,setErrorMsg]=useState("");

  // Custom hook to handle API requests. Fires when prompt changes.
  const{error,promptData,locationData,weatherData,weatherDescription}=useApiRequests(prompt);

  return(
    <>
    <div className="container">
      <header className="header">
        <h1 className="page-title">Current Weather</h1>
      </header>

      <main className="main-content">

      </main>
    </div>
    </>
  )
  
}

export default App
