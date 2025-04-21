import React from 'react'
import { CARD_URL } from '../Utils/Constants'

const MovieCards = ({posterUrl}) => {
  if(!posterUrl) return null
  return (
    <div className='w-48 pr-4'>
      <img src={CARD_URL+posterUrl} alt="CardsImg" />
    </div>
  )
}

export default MovieCards
 