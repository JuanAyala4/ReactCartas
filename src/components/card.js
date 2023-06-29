import React from 'react'
import Image1 from '../assets/python.jpg'
import cards from './cards'

export default function card() {
  return (
    <div className='card'>
        <div className='card-body'>
            <img src='{Image1}' alt='python'></img>
            <h4 className='card-title'>My title</h4>
            <p className='card-text text-secondary'>
                Contenido de la tarjeta 1
            </p>
           

        </div>
    </div>
  )
}
