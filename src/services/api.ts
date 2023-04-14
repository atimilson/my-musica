import axios from "axios";

export const WeatherApi = axios.create({
    baseURL : process.env.NEXT_PUBLIC_WEATHER_API_ROUTE,
    params :{
        appid : process.env.NEXT_PUBLIC_APP_ID
    }
})