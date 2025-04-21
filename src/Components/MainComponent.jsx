import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainComponent = ()=>{   
const movies = useSelector(store => store.Movie.NewMovieListSlice);
if(!movies)  return;
const mainMovie = movies[0];
const {original_title,overview,id}=mainMovie;
console.log(mainMovie,'mainmovie');
    return(<div className="md:pt-0 pt-[50%] bg-black" >
        <VideoTitle   title ={original_title} overview={overview} />
        <VideoBackground movieId={id} />
    </div>);
}

export default MainComponent;