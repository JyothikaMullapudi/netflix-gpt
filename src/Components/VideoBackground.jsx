import { useSelector } from "react-redux";
import useMovietrailer from "../Hooks/useMovietrailer";

const VideoBackground = ({ movieId }) => {
    const trailerId = useSelector(store => store.Movie.trailerId);
    //console.log(trailerId,'trailerid')
    //console.log(movieId,'movieId')
    useMovietrailer(movieId);
    return (<div className="">
        <iframe className="w-screen aspect-video" 
         src={`https://www.youtube.com/embed/${trailerId?.key}?si=e0SSgGeUi6IeO70m?&autoplay=1&mute=1`}
         title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>);
}

export default VideoBackground;