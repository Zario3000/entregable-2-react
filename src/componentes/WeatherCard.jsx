import React, { useRef, useState } from 'react'
import "./styles/weatherCard.css"

const WeatherCard = ({weather,temp,setTextInput,hasError}) => {

    const [isCelsius, setIsCelsius] = useState(true)

const hundleChange = ()=>{
     setIsCelsius(!isCelsius)
}
const city = useRef();

const handleform = event => {
    event.preventDefault()
    setTextInput(city.current.value.toLowerCase().trim())
}

  return (
    <section className='weather'>
        <h1 className='weather-title'>Weather App</h1>
        <form className='weather-form' onSubmit={handleform}>
           <input type="text" placeholder='Search' className='form-input' ref={city}/>
            <button className='form-btn'>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="form-icon">
                 <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                 </svg>

            </button>
        </form>
        {
          hasError?
          <>
          <h2>that city was not found</h2>
          <h3>please, try again</h3>
          </>
          :
          <>
           <h2 className='weather-city'>{weather?.name}, {weather?.sys.country}</h2>
        <article className='weather-container1'>
            <figure className='weather-fig'>
                <img 
                className='weather-img'
                src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="weather icon" />
            </figure>
            <div>
                <h3 className='weather-clouds'>{weather?.weather[0].description}</h3>
                <ul className='weather-info'>
                    <li><span>Wind speed</span><span>{weather?.wind.speed} m/s</span></li>
                    <li><span>Clouds:</span><span>{weather?.clouds.all} %</span></li>
                    <li><span>Pressure:</span><span>{weather?.main.pressure} hPa</span></li>
                    <li><span>Humidity:</span><span>{weather?.main.humidity} %</span></li>
                </ul>
            </div>
            
        </article>
        <div className='weather-container2'>
            <h3 className='weather-temp'>{
            isCelsius?
            temp?.celsius+ "°C"
            :
            temp?.fahrenheit+ "°F"
        
        }</h3>
            <button className='weather-btn' onClick={hundleChange}>Change to 
            {
                isCelsius?"°F":"°C"
            }
            
            </button>
        </div>
          </>
        }
        
    </section>
  )
}

export default WeatherCard