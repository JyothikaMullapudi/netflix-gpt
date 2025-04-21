import { createSlice } from "@reduxjs/toolkit";
import reducer from "./userSlice";

const GptSearchSlice = createSlice({
    name : "GPT",
    initialState : {
        showGPTSearch : false,
        movieresults : null,
        searchmovies : null
    },
    reducers : {
      addGPTSearch : (state,action)=>{
             state.showGPTSearch= !state.showGPTSearch
      },
      addTmdbResults : (state,action)=>{
        const {movieResults,searchlist} = action.payload;
        state.movieresults =movieResults;
        state.searchmovies =searchlist;

      }
    }
});

export const {addGPTSearch,addTmdbResults} = GptSearchSlice.actions ;
export default GptSearchSlice.reducer;