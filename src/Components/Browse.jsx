import { useSelector } from 'react-redux';
import useNewMovies from '../Hooks/useNewMovies';
import Header from './Header'
import MainComponent from './MainComponent';
import SecondComponent from './SecondComponent';
import GptSearch from "./GptSearch";
const Browse = () => {
    useNewMovies();
const GPTView = useSelector(store=>store.GPT.showGPTSearch);
    return (<div>
        <Header />
        {
            GPTView ? <GptSearch /> : <><MainComponent />
            <SecondComponent /></>
        }
        
        
    </div>);
}

export default Browse;