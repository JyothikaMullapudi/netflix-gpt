import React, { useRef } from 'react'
import lang from '../Utils/langConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../Utils/OpenAi';
import { API_OPTIONS } from '../Utils/Constants';
import { addTmdbResults } from '../Utils/GptSearchSlice';

const GptSearchBar = () => {

    const dispatch= useDispatch();
    const chglan= useSelector(store => store.config.inlang);
    const searchtxt=useRef(null);

    const searchTmdb = async (movie)=>{
      const data = await fetch ( 'https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS);
      const json = await data.json();
      return json.results;
     }

    const handlesearch= async()=>{
      //console.log(searchtxt.current.value);
      const gptQuery ="Act as a movie recommendation system and provide some movies for the Query : "+searchtxt.current.value+ ". only give me 5 movies, comma separated like the example given ahead. Example result : Gadar,Sholay,Don,Golmal,koi mil gaya";

      // const gptresults = await openai.chat.completions.create({
        
      //   messages: [
      //     { role: 'User', content: gptQuery }
      //   ],
      //   model: 'gpt-3.5-turbo'
      // });
      
      // console.log(gptresults.choices);
      //MAKE API CALL AND GET MOVIE RESULTS
      const gptresults = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
         // { role: 'developer', content: 'Talk like a pirate.' },
          { role: 'user', content: gptQuery },
        ],
      });

      //if(!gptresults) {}  //HNADLE ERROR ON YOURSELF
      
      //console.log(gptresults.choices[0].message.content);

      const movielist = gptresults.choices[0].message.content.split(",");
      //console.log(movielist);
      //FOR EACH MOVIE WE SHOULD SEARCH IN TMDB API 
      const data = movielist.map(movie => searchTmdb(movie));
      const promisedata = await Promise.all(data);
      console.log(promisedata);
      dispatch(addTmdbResults({movieResults : promisedata, searchlist :movielist}))

    }
    
  return (
    <div className='pt-[60%] md:pt-[15%] flex justify-center  bg-gradient-to-t from-black'>
      <form className=' w-9/12 bg-black grid grid-cols-12' onSubmit={e=>e.preventDefault()}> 
        <input ref={searchtxt} type='text'  placeholder={lang[chglan].gptSearchBar} className=' col-span-9 p-2 m-4 bg-white text-gray-900 ' />
        <button className='col-span-3 mt-2 mb-2 pl-2 pr-4 mr-2 bg-red-700 text-white rounded-lg cursor-pointer' onClick={handlesearch}>{lang[chglan].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
