import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondComponent = () => {

    const Movielist = useSelector((store) => store?.Movie);
    //console.log(Movielist,'mvlis')

    return (
        <div className="bg-black">
            <div className='mt-[20%]md:-mt-54 relative z-20'>
                <MovieList title={"Top Rated Movies"} movies={Movielist.NewMovieListSlice} />
                <MovieList title={"Popular"} movies={Movielist.NewMovieListSlice} />
                <MovieList title={"New Movies"} movies={Movielist.NewMovieListSlice} />
                <MovieList title={"Horror"} movies={Movielist.NewMovieListSlice} />
                <MovieList title={"Upcoming Movies"} movies={Movielist.NewMovieListSlice} />
                <MovieList title={"Hilarious"} movies={Movielist.NewMovieListSlice} />
            </div>
        </div>)
}

export default SecondComponent;