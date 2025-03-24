import useNewMovies from '../Hooks/useNewMovies';
import Header from './Header'
import MainComponent from './MainComponent';
import SecondComponent from './SecondComponent';
const Browse=()=>{
useNewMovies();
    return(<div>
        <Header />
        <MainComponent />
        <SecondComponent />
        </div>);
}

export default Browse;