import React from 'react'
import { useState } from 'react';
import Items from './Items';

const api = {
  key: '9cee0128e8ff592582d08870acf3cd33',
  url:'https://api.openweathermap.org/data/2.5/'
}

export default function Form() {
  const [query,setQuery] = useState('')
  const [weather,setWeather] = useState({})
  
  const search = e => {
    e.preventDefault();
    fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(response => response.json())
    .then(json => {
        setWeather(json);
        setQuery('');
        console.log(json);
    })
  }
  
  const linkedInput = e =>{
    setQuery(e);
  }


  return (
    <div>
        <div className="search-box ">
          <form action="" className='mx-auto' onSubmit={search}>
            <input 
            value={query} 
            onInput={e => linkedInput(e.target.value)}
            type="text"
            className='form-control '
            placeholder='Ville'
            />
            <button type='submit' className='btn btn-primary mt-4'>Rechercher</button>
          </form>
        </div>
        {(typeof weather.main != "undefined") ? (
          <Items
            name = {weather.name}
            country = {weather.sys.country}
            temp = {Math.round(weather.main.temp)}
            main = {weather.weather[0].main}
            icon = {weather.weather[0].icon}
          />
        ) : 
        ('')}
    </div>
  )
}
