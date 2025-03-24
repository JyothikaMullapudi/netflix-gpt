import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import MovieListSlice from "./MovieListSlice";

const appStore= configureStore({

    reducer :{
    user : userSlice,
    Movie : MovieListSlice,
    }
});

export default appStore;