import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { addTrailerId } from "../Utils/MovieListSlice";

const useMovietrailer = (movieId) => {
  const dispatch = useDispatch();
  //console.log(movieId, 'movieId')
  const movieVideo = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const json = await data.json();
    console.log(json.results, 'video');
    const filterData = json.results?.filter(video => video.type == "Trailer");
    //console.log(filterData,'filterdata');
    const trailer = filterData.length ? filterData[0] : json.results[0];
    //console.log(trailer, 'trailer');
    dispatch(addTrailerId(trailer));
  }

  useEffect(() => { movieVideo() }, []);
  return (
    <div>

    </div>
  )
}

export default useMovietrailer;
