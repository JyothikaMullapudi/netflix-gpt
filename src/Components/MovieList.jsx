import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({title,movies}) => {
   console.log(movies);
  return (
    <div>
      <div className='py-2 mx-8'>
        <h1 className='py-2 font-bold text-lg md:text-2xl text-white'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar'>
        <div className='flex '>

            {movies?.map(movie=><MovieCards key={movie?.id} posterUrl={movie?.poster_path}/>)}
        </div>
            
        </div>
      </div>
    </div>
  )
}

export default MovieList;
