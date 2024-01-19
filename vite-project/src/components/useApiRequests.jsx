import { useEffect, useState } from "react";

const useApiRequests=(prompt)=>{
    const [error, setError] = useState(null);
    const [promptData, setPromptData] = useState({});
    const [locationData, setLocationData] = useState([]);
    const [weatherData, setWeatherData] = useState({});
    const [weatherDescription, setWeatherDescription] = useState(null);

    // useEffect(()=>{
    //     const fetchData=async()=>{
    //         if(!prompt) return;

    //         try {
    //             const promptDataRes=await PromptToLocation(prompt);
    //         } catch (error) {
                
    //         }
    //     }
    // })
}


export default useApiRequests;