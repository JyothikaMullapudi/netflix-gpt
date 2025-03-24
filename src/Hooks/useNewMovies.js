import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieListSlice } from "../Utils/MovieListSlice";
import { API_OPTIONS } from "../Utils/Constants";


const useNewMovies =()=>{

    useEffect(()=>{newMovies()},[]);
    const dispatch = useDispatch();

    const newMovies= async()=>{
       

        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
        const json= await data.json();

        console.log(json.results);

        dispatch(addMovieListSlice(json.results));


    }

}

export default useNewMovies;