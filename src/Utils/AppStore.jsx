import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import MovieListSlice from "./MovieListSlice";
import GptSearchSlice from "./GptSearchSlice";
import configSlice from "./configSlice";

const appStore= configureStore({

    reducer :{
    user : userSlice,
    Movie : MovieListSlice,
    GPT : GptSearchSlice,
    config : configSlice
    }
});

export default appStore;