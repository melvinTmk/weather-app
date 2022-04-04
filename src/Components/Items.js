import React from 'react'

export default function Items(props) {
  return (
    <div className='text-center mt-4 border border-2 border-white p-4 bloc'>
        <h2 className='text-white'>{props.name}, {props.country}</h2>
        <h3 className='text-white'>{props.temp}°C</h3>
        <h3 className='text-white'>{props.main}</h3>
    </div>
  )
}
