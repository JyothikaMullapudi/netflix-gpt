import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
 const {movieresults,searchmovies} = useSelector(store=> store?.GPT);
 //if(!searchmovies) return null;

 console.log(movieresults,searchmovies,'lis');

  return (
    <div className='p-10 mt-2 bg-black text-white'>
    {/* {searchmovies[0]} */}
    {searchmovies?.map((movie,index)=><MovieList title ={movie} key ={movie} movies ={movieresults[index]}/>)} 
    </div>
  )
}

export default GptMovieSuggestion;
